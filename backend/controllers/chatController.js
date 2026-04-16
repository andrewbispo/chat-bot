// (opcional para evolução MVC)
let messages = [];

function botResponse(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("oi")) return "Olá! 😄";
  if (msg.includes("erro")) return "Verifique o sistema ⚠️";
  return "Não entendi 🤔";
}

function sendMessage(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem vazia" });
  }

  const bot = botResponse(message);

  messages.push({ message, bot });

  res.json({ message, bot });
}

function getMessages(req, res) {
  res.json(messages);
}

module.exports = { sendMessage, getMessages };