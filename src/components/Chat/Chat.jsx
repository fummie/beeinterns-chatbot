import React, { useState }  from "react";

import Messages from "../Messages";
import Input from "../Input";

import "./Chat.css";

const Chat = () => {
  const [id, setId] = useState(0);
  const [messages, setMessages] = useState([]);

  const addMessage = (author, text) => {
    console.log(`addMessage: [ author: ${author} text: ${text}`);
    const message = createMessage(author, text);
    const newMessages = messages;
    newMessages.push(message);
    setMessages(newMessages);

    if (author !== "Bot")
      addRespond(message);
  };

  const addRespond = (message) => {
    const author = "Bot";
    const text = "Your request is:" + message.text;
    addMessage(author, text);
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
      <Messages messages={messages}/>
      <Input/>
    </div>
  );
};

export default Chat;
