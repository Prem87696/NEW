/***********************
 PK VOICE ASSISTANT
 Level-1 (Working)
***********************/

// 🔑 APNI GEMINI API KEY YAHA PASTE KARO
const API_KEY = "AIzaSyDZZCfe-7-Sz4Dhqab17oOyWP43S7xJrBA";

// ========= ELEMENTS =========
const startBtn = document.getElementById("startBtn");
const userText = document.getElementById("userText");
const aiText = document.getElementById("aiText");

// ========= SPEECH RECOGNITION =========
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Your browser does not support Speech Recognition");
}

const recognition = new SpeechRecognition();
recognition.lang = "hi-IN"; // Hindi + Hinglish
recognition.interimResults = false;

// ========= BUTTON CLICK =========
startBtn.addEventListener("click", () => {
  aiText.textContent = "Listening...";
  recognition.start();
});

// ========= WHEN USER SPEAKS =========
recognition.onresult = (event) => {
  const spokenText = event.results[0][0].transcript;
  userText.textContent = spokenText;
  getAIResponse(spokenText);
};

recognition.onerror = (event) => {
  aiText.textContent = "Mic error: " + event.error;
};

// ========= GEMINI API CALL =========
async function getAIResponse(prompt) {
  aiText.textContent = "Thinking...";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("Gemini Response:", data);

    let reply = "Koi jawab nahi mila";

    if (data.candidates && data.candidates.length > 0) {
      reply = data.candidates[0].content.parts[0].text;
    }

    aiText.textContent = reply;
    speak(reply);

  } catch (error) {
    aiText.textContent = "Error: Internet ya API problem";
    console.error(error);
  }
}

// ========= TEXT TO SPEECH =========
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}
