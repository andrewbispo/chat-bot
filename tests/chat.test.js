const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

let messages = [];

function botResponse(msg) {
  if (msg.includes("oi")) return "Olá!";
  if (msg.includes("erro")) return "Verifique o sistema.";
  return "ok";
}

app.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem vazia" });
  }

  const bot = botResponse(message);

  messages.push({ message, bot });

  res.json({ message, bot });
});

app.get("/chat", (req, res) => {
  res.json(messages);
});

describe("Chat API", () => {
  test("envia mensagem com sucesso", async () => {
    const res = await request(app)
      .post("/chat")
      .send({ message: "oi" });

    expect(res.statusCode).toBe(200);
    expect(res.body.bot).toBe("Olá!");
  });

  test("erro em mensagem vazia", async () => {
    const res = await request(app)
      .post("/chat")
      .send({ message: "" });

    expect(res.statusCode).toBe(400);
  });

  test("resposta de erro", async () => {
    const res = await request(app)
      .post("/chat")
      .send({ message: "erro no sistema" });

    expect(res.body.bot).toContain("Verifique");
  });
});