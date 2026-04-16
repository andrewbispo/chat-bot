const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let messages = [];

// 🤖 Lógica do bot
function botResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("oi") || msg.includes("olá")) {
    return "Olá! Como posso ajudar? 😄";
  }

  if (msg.includes("erro")) {
    return "Verifique o sistema ou tente reiniciar ⚠️";
  }

  if (msg.includes("ajuda")) {
    return "Claro! Me diga qual é o problema 🤖";
  }

  // ⏰ NOVO: responder hora
  if (msg.includes("hora")) {
    return `Agora são ${new Date().toLocaleTimeString()} ⏰`;
  }

  const fallback = [
    "Não entendi, pode reformular? 🤔",
    "Hmm... explica melhor isso pra mim 😅",
    "Estou aprendendo ainda 📚",
  ];

  return fallback[Math.floor(Math.random() * fallback.length)];
}

// 📡 POST /chat
app.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem vazia" });
  }

  const userMsg = {
    id: Date.now(),
    sender: "user",
    text: message,
    time: new Date().toLocaleTimeString(),
  };

  const botMsg = {
    id: Date.now() + 1,
    sender: "bot",
    text: botResponse(message),
    time: new Date().toLocaleTimeString(),
  };

  messages.push(userMsg, botMsg);

  res.json({ userMsg, botMsg });
});

// 📡 GET /chat
app.get("/chat", (req, res) => {
  res.json(messages);
});

// 🚀 start server
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});