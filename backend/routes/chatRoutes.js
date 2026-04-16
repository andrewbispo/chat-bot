const express = require("express");
const router = express.Router();

const { sendMessage, getMessages } = require("../controllers/chatController");

router.post("/chat", sendMessage);
router.get("/chat", getMessages);

module.exports = router;