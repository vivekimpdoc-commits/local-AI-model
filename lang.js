const translations = {
    en: {
        // Navbar
        "nav_dashboard": "Dashboard",
        "nav_doc": "Documentation",
        "nav_ai": "Forensics AI",
        "nav_investigation": "Investigation",
        "nav_station": "Station Mgmt",
        "nav_reports": "Reports",
        "nav_toggle_lang": "हिंदी",

        // Dashboard Greeting
        "dash_welcome": "Welcome to",
        "dash_title": "🚔 AI Intelligence Hub",
        "dash_subtitle": "Police Forensics & Legal AI Toolkit — Offline Ready",
        
        // Dashboard Status
        "sys_online": "System Online",
        "kpi_fir": "FIRs Drafted",
        "kpi_cases": "Cases Analyzed",
        "kpi_faces": "Faces Scanned",
        "kpi_audio": "Audio Processed",
        
        // Quick Actions
        "qa_title": "⚡ Quick Actions",
        "qa_fir": "Draft FIR",
        "qa_case": "Analyze Case",
        "qa_detect": "CCTV Detect",
        "qa_face": "Face Match",
        "qa_audio": "Transcribe",
        "qa_db": "Search DB",
        "qa_court": "Court Dates",
        "qa_export": "Export",
        
        // Ticker
        "ticker_label": "📱 LIVE ACTIVITY",
        "ticker_text": "✓ System initialized &nbsp;&nbsp;&nbsp; ✓ AI models loaded &nbsp;&nbsp;&nbsp; ✓ Database connected &nbsp;&nbsp;&nbsp; ✓ Ready for operations &nbsp;&nbsp;&nbsp; ✓ Waiting for officer input...",
        
        // Section Headers
        "sec_01_title": "📋 Documentation & FIR",
        "sec_01_desc": "Case file drafting, FIR templates, and legal analysis",
        "sec_02_title": "🔬 Forensics AI Tools",
        "sec_02_desc": "Object detection, face matching, and audio transcription",
        "sec_03_title": "🗂️ Investigation & Database",
        "sec_03_desc": "Search suspects and criminal records",
        "sec_04_title": "🏢 Station Management",
        "sec_04_desc": "Daily office tasks, court dates, and evidence tracking",
        "sec_05_title": "📊 Reports & Activity Logs",
        "sec_05_desc": "Session summary and exportable activity log",

        // Case Analysis Tool
        "tool_case_title": "📝 Case Analysis",
        "tool_case_desc": "Draft FIRs, extract evidence points, and identify sections from raw complaints.",
        "tool_case_lbl1": "Statement / Complaint Details:",
        "tool_case_ph1": "Paste complainant statement or rough notes here...",
        "tool_case_lbl2": "Target Output:",
        "tool_case_opt1": "Draft FIR Structure",
        "tool_case_opt2": "Extract Suspect/Evidence",
        "tool_case_opt3": "Suggest Legal Sections (IPC/BNS)",
        "tool_case_btn": "⚙️ Run AI Analysis",

        // FIR Templates Tool
        "tool_fir_title": "📋 FIR Quick Templates",
        "tool_fir_desc": "Standard templates for common crimes (Theft, Assault, Cyber).",
        "tool_fir_btn1": "Theft (Mobile/Vehicle)",
        "tool_fir_btn2": "Physical Assault",
        "tool_fir_btn3": "Cyber / Financial Fraud",

        // Object Detection
        "tool_obj_title": "👁️ Object Detection",
        "tool_obj_desc": "Detect people, vehicles, and weapons in CCTV footage or images.",
        "tool_obj_lbl1": "Upload CCTV/Image:",
        "tool_obj_lbl2": "Detect Objects:",
        "tool_obj_opt1": "All Objects",
        "tool_obj_opt2": "Weapons Only",
        "tool_obj_opt3": "Vehicles Only",
        "tool_obj_btn": "▶ Analyze Image",

        // Face Verif
        "tool_face_title": "👤 Face Verification",
        "tool_face_desc": "Compare suspect face with database or match two photos.",
        "tool_face_up1": "📷 Upload Photo 1",
        "tool_face_up2": "📷 Upload Photo 2",
        "tool_face_btn": "▶ Verify Identity",

        // Audio Transcribe
        "tool_audio_title": "🎙️ Audio Transcription",
        "tool_audio_desc": "Convert suspect statements and bodycam audio to text.",
        "tool_audio_up": "🎵 Upload Audio",
        "tool_audio_btn": "▶ Transcribe",
        "tool_audio_dl": "⬇️ Download as .txt",

        // Criminal DB
        "tool_db_title": "🗂️ Criminal Database Search",
        "tool_db_desc": "Search suspect records by name, crime type, or city.",
        "tool_db_ph": "🔍 Enter Name, Crime Type, or City...",
        "tool_db_btn": "🔎 Search",

        // Court Tracker
        "tool_crt_title": "📅 Court Tracker",
        "tool_crt_lbl1": "Case Number / Details:",
        "tool_crt_ph1": "e.g. FIR-2026-102 (High Court)",
        "tool_crt_btn": "Add Date",

        // Evidence Log
        "tool_evd_title": "📦 Evidence Log",
        "tool_evd_lbl1": "Item Description:",
        "tool_evd_ph1": "e.g. Blood-stained shirt (Bag A)",
        "tool_evd_lbl2": "Current Status:",
        "tool_evd_btn": "Log Evidence Movement",

        // Session Report
        "tool_rep_title": "📊 Session Report",
        "tool_rep_desc": "Complete record of all AI activity today — automatically tracked.",
        "tool_rep_btn": "⬇️ Export .txt"
    },
    hi: {
        // Navbar
        "nav_dashboard": "डैशबोर्ड",
        "nav_doc": "दस्तावेज़ (FIR)",
        "nav_ai": "फॉरेंसिक AI",
        "nav_investigation": "जांच (Investigation)",
        "nav_station": "स्टेशन प्रबंधन",
        "nav_reports": "रिपोर्ट्स",
        "nav_toggle_lang": "English",

        // Dashboard Greeting
        "dash_welcome": "स्वागत है",
        "dash_title": "🚔 AI इंटेलिजेंस हब",
        "dash_subtitle": "पुलिस फॉरेंसिक और लीगल AI टूलकिट — ऑफलाइन रेडी",
        
        // Dashboard Status
        "sys_online": "सिस्टम ऑनलाइन",
        "kpi_fir": "FIR ड्राफ्ट की गई",
        "kpi_cases": "केस एनालाइज किए गए",
        "kpi_faces": "चेहरे स्कैन किए गए",
        "kpi_audio": "ऑडियो प्रोसेस हुआ",
        
        // Quick Actions
        "qa_title": "⚡ क्विक एक्शंस",
        "qa_fir": "FIR ड्राफ्ट करें",
        "qa_case": "केस एनालिसिस",
        "qa_detect": "CCTV चेक करें",
        "qa_face": "चेहरा मिलाएं",
        "qa_audio": "ऑडियो ट्रांसक्राइब",
        "qa_db": "रिकॉर्ड खोजें",
        "qa_court": "कोर्ट तारीखें",
        "qa_export": "एक्सपोर्ट",
        
        // Ticker
        "ticker_label": "📱 लाइव एक्टिविटी",
        "ticker_text": "✓ सिस्टम शुरू हो गया &nbsp;&nbsp;&nbsp; ✓ AI मॉडल्स लोड हो गए &nbsp;&nbsp;&nbsp; ✓ डेटाबेस कनेक्टेड &nbsp;&nbsp;&nbsp; ✓ सिस्टम काम के लिए तैयार &nbsp;&nbsp;&nbsp; ✓ ऑफिसर के इनपुट का इंतजार...",
        
        // Section Headers
        "sec_01_title": "📋 दस्तावेज़ और FIR",
        "sec_01_desc": "केस फाइल ड्राफ्टिंग, FIR टेम्प्लेट, और लीगल एनालिसिस",
        "sec_02_title": "🔬 फॉरेंसिक AI टूल्स",
        "sec_02_desc": "ऑब्जेक्ट डिटेक्शन, फेस मैचिंग, और ऑडियो ट्रांसक्रिप्शन",
        "sec_03_title": "🗂️ जांच और डेटाबेस",
        "sec_03_desc": "संदिग्धों (Suspects) और क्रिमिनल रिकॉर्ड्स की खोज",
        "sec_04_title": "🏢 स्टेशन प्रबंधन (Management)",
        "sec_04_desc": "दैनिक ऑफिस कार्य, कोर्ट की तारीखें, और सबूत ट्रैकिंग",
        "sec_05_title": "📊 रिपोर्ट्स और लॉग्स",
        "sec_05_desc": "आज का सारांश और एक्सपोर्ट होने वाले लॉग्स",

        // Case Analysis Tool
        "tool_case_title": "📝 केस एनालिसिस",
        "tool_case_desc": "शिकायत से FIR ड्राफ्ट करें, सबूत निकालें, और धाराएं पहचानें।",
        "tool_case_lbl1": "शिकायत (Complaint) का विवरण:",
        "tool_case_ph1": "शिकायतकर्ता का बयान या रफ नोट्स यहाँ पेस्ट करें...",
        "tool_case_lbl2": "क्या आउटपुट चाहिए:",
        "tool_case_opt1": "FIR स्ट्रक्चर ड्राफ्ट करें",
        "tool_case_opt2": "संदिग्ध/सबूत निकालें",
        "tool_case_opt3": "कानूनी धाराएं (IPC/BNS) सुझाएं",
        "tool_case_btn": "⚙️ AI एनालिसिस शुरू करें",

        // FIR Templates Tool
        "tool_fir_title": "📋 FIR क्विक टेम्प्लेट्स",
        "tool_fir_desc": "सामान्य अपराधों (चोरी, मारपीट, साइबर) के लिए मानक टेम्प्लेट।",
        "tool_fir_btn1": "चोरी (मोबाइल/वाहन)",
        "tool_fir_btn2": "शारीरिक मारपीट",
        "tool_fir_btn3": "साइबर / वित्तीय धोखाधड़ी",

        // Object Detection
        "tool_obj_title": "👁️ ऑब्जेक्ट डिटेक्शन",
        "tool_obj_desc": "CCTV फुटेज या इमेजेज में लोगों, वाहनों और हथियारों का पता लगाएं।",
        "tool_obj_lbl1": "CCTV/इमेज अपलोड करें:",
        "tool_obj_lbl2": "क्या खोजना है:",
        "tool_obj_opt1": "सभी ऑब्जेक्ट्स",
        "tool_obj_opt2": "सिर्फ हथियार",
        "tool_obj_opt3": "सिर्फ वाहन (Vehicles)",
        "tool_obj_btn": "▶ इमेज एनालाइज करें",

        // Face Verif
        "tool_face_title": "👤 फेस वेरिफिकेशन",
        "tool_face_desc": "डेटाबेस से संदिग्ध का चेहरा मिलाएं या दो फोटो मैच करें।",
        "tool_face_up1": "📷 फोटो 1 अपलोड करें",
        "tool_face_up2": "📷 फोटो 2 अपलोड करें",
        "tool_face_btn": "▶ पहचान सत्यापित करें (Verify)",

        // Audio Transcribe
        "tool_audio_title": "🎙️ ऑडियो ट्रांसक्रिप्शन",
        "tool_audio_desc": "संदिग्ध के बयान और बॉडीकैम ऑडियो को टेक्स्ट में बदलें।",
        "tool_audio_up": "🎵 ऑडियो अपलोड करें",
        "tool_audio_btn": "▶ ट्रांसक्राइब करें",
        "tool_audio_dl": "⬇️ .txt में डाउनलोड करें",

        // Criminal DB
        "tool_db_title": "🗂️ क्रिमिनल डेटाबेस सर्च",
        "tool_db_desc": "नाम, अपराध के प्रकार, या शहर से संदिग्ध रिकॉर्ड खोजें।",
        "tool_db_ph": "🔍 नाम, क्राइम टाइप, या शहर डालें...",
        "tool_db_btn": "🔎 खोजें (Search)",

        // Court Tracker
        "tool_crt_title": "📅 कोर्ट ट्रैकर",
        "tool_crt_lbl1": "केस नंबर / विवरण:",
        "tool_crt_ph1": "उदा. FIR-2026-102 (High Court)",
        "tool_crt_btn": "तारीख (Date) जोड़ें",

        // Evidence Log
        "tool_evd_title": "📦 सबूत (Evidence) लॉग",
        "tool_evd_lbl1": "आइटम का विवरण:",
        "tool_evd_ph1": "उदा. खून से सनी शर्ट (Bag A)",
        "tool_evd_lbl2": "वर्तमान स्थिति:",
        "tool_evd_btn": "सबूत मूवमेंट लॉग करें",

        // Session Report
        "tool_rep_title": "📊 सेशन रिपोर्ट",
        "tool_rep_desc": "आज की सभी AI एक्टिविटी का पूरा रिकॉर्ड — आटोमेटिक ट्रैक किया गया।",
        "tool_rep_btn": "⬇️ .txt एक्सपोर्ट करें"
    }
};

let currentLang = localStorage.getItem('policeLang') || 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('policeLang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    const langDict = translations[currentLang];
    
    // Update simple text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langDict[key]) {
            el.innerHTML = langDict[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (langDict[key]) {
            el.placeholder = langDict[key];
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', applyLanguage);
