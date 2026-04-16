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

  const fallback = [
    "Não entendi, pode reformular? 🤔",
    "Hmm... explica melhor isso pra mim 😅",
    "Estou aprendendo ainda 📚",
  ];

  return fallback[Math.floor(Math.random() * fallback.length)];
}