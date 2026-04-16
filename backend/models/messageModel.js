// modelo simples (sem banco ainda)
class Message {
  constructor(sender, text) {
    this.sender = sender;
    this.text = text;
    this.time = new Date().toLocaleTimeString();
  }
}

module.exports = Message;