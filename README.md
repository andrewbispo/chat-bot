# 🤖 Chat Bot Project

Este é um projeto simples de chatbot com backend em Node.js usando Express e um frontend separado.

---

## 📁 Estrutura do Projeto

```
chat-bot/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/
├── script.js
├── tests/
```

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* CORS
* Jest (testes)
* Supertest (testes de API)

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório (ou use sua pasta local)

```bash
git clone <url-do-repositorio>
cd chat-bot
```

---

### 2. Acesse o backend

```bash
cd backend
```

---

### 3. Instale as dependências

```bash
npm install
```

---

### 4. Inicie o servidor

```bash
npm start
```

O servidor irá rodar em:

```
http://localhost:3000
```

---

## 📡 Endpoints da API

### 🔹 POST /chat

Envia uma mensagem para o chatbot.

**Body:**

```json
{
  "message": "Oi"
}
```

**Resposta:**

```json
{
  "userMsg": {...},
  "botMsg": {...}
}
```

---

### 🔹 GET /chat

Retorna todas as mensagens da conversa.

---

## 🧠 Funcionalidades do Bot

O bot responde automaticamente baseado em palavras-chave:

* "oi" ou "olá" → Saudação
* "erro" → Sugestão de verificação
* "ajuda" → Oferece suporte
* "hora" → Retorna o horário atual

Caso não entenda, ele retorna uma resposta aleatória.

---

## 🧪 Rodando os testes

Dentro da pasta `backend`, execute:

```bash
npm test
```

---

## 💡 Observações

* Certifique-se de rodar os comandos dentro da pasta `backend`
* O frontend deve consumir a API em `http://localhost:3000`

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo.
