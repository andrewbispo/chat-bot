# 🤖 Chat Bot Project

Este é um projeto de chatbot com backend estruturado em camadas (MVC) usando Node.js + Express e um frontend simples.

---

## 📁 Estrutura do Projeto

```
chat-bot/
├── backend/
│   ├── controllers/
│   │   └── chatController.js
│   ├── database/
│   │   └── db.js
│   ├── models/
│   │   └── messageModel.js
│   ├── routes/
│   │   └── chatRoutes.js
│   ├── server.js
│   ├── package.json
│   └── node_modules/
├── frontend/
│   └── index.html
├── tests/
├── script.js
└── README.md
```

---

## 🏗️ Arquitetura

O backend segue uma separação de responsabilidades:

* **controllers/** → lógica das requisições
* **models/** → estrutura e manipulação de dados
* **database/** → simulação de banco de dados
* **routes/** → definição das rotas da API
* **server.js** → inicialização do servidor

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* CORS
* Jest (testes)
* Supertest (testes de API)

---

## ⚙️ Como rodar o projeto

### 1. Acesse a pasta do backend

```bash
cd backend
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Inicie o servidor

```bash
npm start
```

O servidor estará disponível em:

```
http://localhost:3000
```

---

## 🌐 Rodando o Frontend

Abra o arquivo:

```
frontend/index.html
```

Ou use uma extensão como **Live Server** no VS Code.

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

Os testes são feitos com **Jest** e **Supertest**, permitindo validar os endpoints da API sem precisar subir o servidor manualmente.

### 📁 Localização dos testes

Os arquivos de teste devem ficar dentro da pasta:

```
backend/tests/
```

E devem seguir o padrão de nome:

```
*.test.js ou *.spec.js
```

Exemplo:

```
backend/tests/chat.test.js
```

---

### ▶️ Executar os testes

Dentro da pasta `backend`, rode:

```bash
npm test
```

---

### ✅ O que é testado

* Envio de mensagens para o endpoint `/chat`
* Validação de erro quando a mensagem está vazia
* Respostas automáticas do bot

---

### ⚠️ Problemas comuns

* **"No tests found"** → verifique se o nome do arquivo termina com `.test.js`
* Arquivo fora da pasta `backend` → mova para `backend/tests`
* Dependências não instaladas → rode `npm install`

---

## 💡 Observações

* Sempre execute o backend dentro da pasta `backend`
* O frontend consome a API em `http://localhost:3000`
* Certifique-se que o backend esteja rodando antes de abrir o frontend

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo.
