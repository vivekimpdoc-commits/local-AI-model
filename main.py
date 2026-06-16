import os
import shutil
from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import tempfile

# Try to import ML libraries (might fail if not installed or models missing, so we'll handle gracefully if possible)
try:
    import ollama
except ImportError:
    ollama = None

try:
    from ultralytics import YOLO
    # Initialize YOLO model lazily or here
    yolo_model = None
except ImportError:
    YOLO = None
    yolo_model = None

try:
    from deepface import DeepFace
except ImportError:
    DeepFace = None

try:
    import whisper
    whisper_model = None
except ImportError:
    whisper = None
    whisper_model = None


app = FastAPI(title="Local AI Legal Toolkit")

# Allow CORS for linking with frontends
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Models ----
class CaseAnalysisRequest(BaseModel):
    text: str
    system_prompt: str = "You are a helpful legal assistant."
    model_name: str = "llama3" # Or "mistral"

# ---- Endpoints ----

@app.get("/")
def read_root():
    return {"message": "Local AI Legal Toolkit API is running. Check /docs for endpoints."}

@app.post("/api/analyze-case")
def analyze_case(request: CaseAnalysisRequest):
    """
    Uses local Ollama to analyze legal text or draft reports.
    Make sure Ollama is installed and the requested model is pulled.
    """
    if not ollama:
        raise HTTPException(status_code=500, detail="Ollama library not installed")
    
    try:
        response = ollama.chat(model=request.model_name, messages=[
            {
                'role': 'system',
                'content': request.system_prompt
            },
            {
                'role': 'user',
                'content': request.text
            }
        ])
        return {"response": response['message']['content']}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ollama Error: {str(e)}")

@app.post("/api/detect-objects")
async def detect_objects(file: UploadFile = File(...)):
    """
    Uses YOLO to detect objects, people, or weapons in an image.
    """
    global yolo_model
    if not YOLO:
        raise HTTPException(status_code=500, detail="ultralytics library not installed")
    
    try:
        # Save uploaded file temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as temp_file:
            shutil.copyfileobj(file.file, temp_file)
            temp_path = temp_file.name

        if yolo_model is None:
            # Load the model on first request to save startup time
            yolo_model = YOLO("yolov8n.pt") # Uses the nano model by default, downloads if missing

        results = yolo_model(temp_path)
        
        detections = []
        for r in results:
            boxes = r.boxes
            for box in boxes:
                cls_id = int(box.cls[0])
                conf = float(box.conf[0])
                name = yolo_model.names[cls_id]
                detections.append({
                    "class": name,
                    "confidence": conf,
                    "box": box.xyxy[0].tolist() # [x1, y1, x2, y2]
                })

        os.remove(temp_path)
        return {"detections": detections}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"YOLO Error: {str(e)}")

@app.post("/api/verify-face")
async def verify_face(img1: UploadFile = File(...), img2: UploadFile = File(...)):
    """
    Uses DeepFace to verify if two images show the same person.
    """
    if not DeepFace:
        raise HTTPException(status_code=500, detail="deepface library not installed")
    
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as t1, \
             tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as t2:
            shutil.copyfileobj(img1.file, t1)
            shutil.copyfileobj(img2.file, t2)
            t1_path = t1.name
            t2_path = t2.name

        result = DeepFace.verify(img1_path=t1_path, img2_path=t2_path)
        
        os.remove(t1_path)
        os.remove(t2_path)
        
        return {
            "verified": result.get("verified"),
            "distance": result.get("distance"),
            "model": result.get("model")
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DeepFace Error: {str(e)}")

@app.post("/api/transcribe")
async def transcribe_audio(file: UploadFile = File(...)):
    """
    Uses Whisper to transcribe audio files (statements, recordings).
    """
    global whisper_model
    if not whisper:
        raise HTTPException(status_code=500, detail="whisper library not installed")
    
    try:
        # Save temporary audio
        ext = os.path.splitext(file.filename)[1]
        with tempfile.NamedTemporaryFile(delete=False, suffix=ext) as temp_file:
            shutil.copyfileobj(file.file, temp_file)
            temp_path = temp_file.name

        if whisper_model is None:
            # Load base model. Options: tiny, base, small, medium, large
            whisper_model = whisper.load_model("tiny") 

        result = whisper_model.transcribe(temp_path)
        
        os.remove(temp_path)
        return {"text": result["text"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Whisper Error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
