const API_URL = "http://127.0.0.1:8000";

// Helper for updating file input names
function setupFileInput(inputId, nameId) {
    const input = document.getElementById(inputId);
    const nameLabel = document.getElementById(nameId);
    input.addEventListener('change', () => {
        if (input.files.length > 0) {
            nameLabel.textContent = input.files[0].name;
        } else {
            nameLabel.textContent = "No file selected";
        }
    });
}

setupFileInput('yolo-image', 'yolo-file-name');
setupFileInput('face-img1', 'face1-name');
setupFileInput('face-img2', 'face2-name');
setupFileInput('audio-file', 'audio-name');

// 1. LLM Case Analysis
document.getElementById('btn-analyze').addEventListener('click', async () => {
    const btn = document.getElementById('btn-analyze');
    const text = document.getElementById('llm-text').value;
    const model = document.getElementById('llm-model').value;
    const resultBox = document.getElementById('llm-result');
    const content = resultBox.querySelector('.content');

    if (!text.trim()) {
        alert("Please enter some text to analyze.");
        return;
    }

    btn.disabled = true;
    btn.textContent = "Analyzing... (may take a minute)";
    resultBox.classList.add('hidden');

    try {
        const response = await fetch(`${API_URL}/api/analyze-case`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text, model_name: model })
        });
        
        if (!response.ok) throw new Error("Server error or Ollama not running.");
        const data = await response.json();
        
        content.textContent = data.response;
        resultBox.classList.remove('hidden');
    } catch (err) {
        alert("Error: " + err.message + "\nMake sure Ollama is installed and running.");
    } finally {
        btn.disabled = false;
        btn.textContent = "Analyze Case";
    }
});

// 2. YOLO Object Detection
document.getElementById('btn-detect').addEventListener('click', async () => {
    const btn = document.getElementById('btn-detect');
    const fileInput = document.getElementById('yolo-image');
    const resultBox = document.getElementById('yolo-result');
    const list = resultBox.querySelector('.list');

    if (fileInput.files.length === 0) {
        alert("Please upload an image.");
        return;
    }

    btn.disabled = true;
    btn.textContent = "Detecting Objects...";
    resultBox.classList.add('hidden');
    list.innerHTML = "";

    try {
        const formData = new FormData();
        formData.append("file", fileInput.files[0]);

        const response = await fetch(`${API_URL}/api/detect-objects`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) throw new Error("Detection failed.");
        const data = await response.json();
        
        if (data.detections.length === 0) {
            list.innerHTML = "<li>No objects detected.</li>";
        } else {
            data.detections.forEach(d => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${d.class}</span> <span style="color:var(--success)">${(d.confidence * 100).toFixed(1)}% confidence</span>`;
                list.appendChild(li);
            });
        }
        resultBox.classList.remove('hidden');
    } catch (err) {
        alert("Error: " + err.message);
    } finally {
        btn.disabled = false;
        btn.textContent = "Run Detection";
    }
});

// 3. DeepFace Face Verification
document.getElementById('btn-verify').addEventListener('click', async () => {
    const btn = document.getElementById('btn-verify');
    const img1 = document.getElementById('face-img1');
    const img2 = document.getElementById('face-img2');
    const resultBox = document.getElementById('face-result');
    const content = resultBox.querySelector('.content');

    if (img1.files.length === 0 || img2.files.length === 0) {
        alert("Please upload BOTH images to compare.");
        return;
    }

    btn.disabled = true;
    btn.textContent = "Verifying...";
    resultBox.classList.add('hidden');

    try {
        const formData = new FormData();
        formData.append("img1", img1.files[0]);
        formData.append("img2", img2.files[0]);

        const response = await fetch(`${API_URL}/api/verify-face`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) throw new Error("Verification failed.");
        const data = await response.json();
        
        if (data.verified) {
            content.innerHTML = `<h3 style="color:var(--success); margin:0;">✅ MATCH DETECTED</h3><p>Distance score: ${data.distance.toFixed(3)}</p>`;
        } else {
            content.innerHTML = `<h3 style="color:var(--danger); margin:0;">❌ NOT A MATCH</h3><p>Distance score: ${data.distance.toFixed(3)}</p>`;
        }
        resultBox.classList.remove('hidden');
    } catch (err) {
        alert("Error: " + err.message);
    } finally {
        btn.disabled = false;
        btn.textContent = "Verify Identity";
    }
});

// 4. Whisper Audio Transcription
document.getElementById('btn-transcribe').addEventListener('click', async () => {
    const btn = document.getElementById('btn-transcribe');
    const fileInput = document.getElementById('audio-file');
    const resultBox = document.getElementById('audio-result');
    const content = resultBox.querySelector('.content');

    if (fileInput.files.length === 0) {
        alert("Please upload an audio file.");
        return;
    }

    btn.disabled = true;
    btn.textContent = "Transcribing... (takes time depending on audio length)";
    resultBox.classList.add('hidden');

    try {
        const formData = new FormData();
        formData.append("file", fileInput.files[0]);

        const response = await fetch(`${API_URL}/api/transcribe`, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) throw new Error("Transcription failed.");
        const data = await response.json();
        
        content.textContent = data.text;
        resultBox.classList.remove('hidden');
    } catch (err) {
        alert("Error: " + err.message);
    } finally {
        btn.disabled = false;
        btn.textContent = "Transcribe";
    }
});
