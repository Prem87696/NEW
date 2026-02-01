// ========= SETTINGS =========
const API_KEY = "AIzaSyDZZCfe-7-Sz4Dhqab17oOyWP43S7xJrBA";

// ========= ELEMENTS =========
const startBtn = document.getElementById("startBtn");
const userText = document.getElementById("userText");
const aiText = document.getElementById("aiText");

// ========= SPEECH RECOGNITION =========
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-IN"; // Hinglish works
recognition.interimResults = false;

// ========= BUTTON CLICK =========
startBtn.onclick = () => {
  recognition.start();
  aiText.textContent = "Listening...";
};

// ========= WHEN USER SPEAKS =========
recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  userText.textContent = text;
  getAIResponse(text);
};

// ========= GEMINI API CALL =========
async function getAIResponse(prompt) {
  aiText.textContent = "Thinking...";

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const data = await response.json();
  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

  aiText.textContent = reply;
  speak(reply);
}

// ========= TEXT TO SPEECH =========
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  window.speechSynthesis.speak(speech);
}
