/*************************
 PK VOICE ASSISTANT
 FINAL WORKING SCRIPT
**************************/

const API_KEY = "AIzaSyDZZCfe-7-Sz4Dhqab17oOyWP43S7xJrBA"; // apni key

// Elements
const startBtn = document.getElementById("startBtn");
const userText = document.getElementById("userText");
const aiText = document.getElementById("aiText");

// Speech Recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "hi-IN";
recognition.interimResults = false;

// Button click
startBtn.onclick = () => {
  aiText.innerText = "Listening...";
  recognition.start();
};

// User speech result
recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  userText.innerText = text;
  askGemini(text);
};

// Ask Gemini
async function askGemini(prompt) {
  aiText.innerText = "Thinking...";

  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await res.json();
    console.log("FULL RESPONSE:", data); // 🔍 very important

    let reply = "Samajh nahi aaya";

    if (
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0]
    ) {
      reply = data.candidates[0].content.parts[0].text;
    }

    aiText.innerText = reply;
    speak(reply);

  } catch (err) {
    aiText.innerText = "API ya Internet error";
    console.error(err);
  }
}

// Text to Speech
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}
