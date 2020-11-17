import React, { useState }  from "react";

import Messages from "../Messages";
import Input from "../Input";

import "./Chat.css";

const Chat = () => {
  const [id, setId] = useState(0);
  const [messages, setMessages] = useState([]);

  const addMessage = (author, text) => {
    const message = createMessage(author, text);
    const newMessages = messages;
    newMessages.push(message);
    setMessages(newMessages);

    if (author != "Bot")
      createRespond(message);
  };

  const addRespond = (message) => {
    const author = "Bot";
    const text = "Your request is:" + message.text;
    const message = createMessage(author, text);
    addMessage(message);
  };

  const createMessage = (author, text) => {
    const savedId = id;
    setId(id + 1);
    return {
      id: savedId,
      author,
      text
    };
  };

  return (
    <div className="chat">
      <Messages
        messages={messages}
        addMessage={addMessage}
      />
      <Input/>
    </div>
  );
};

export default Chat;
