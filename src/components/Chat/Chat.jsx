import React, { useState, useReducer }  from "react";

import Messages from "../Messages";
import Input from "../Input";

import "./Chat.css";

const ADD_MESSAGE = "ADD_MESSAGE";

const messagesReducer = (messages, messagesAction) => {
  switch (messagesAction.type) {
    case ADD_MESSAGE:
      return [...messages, messagesAction.item];
    default:
      return messages;
  };
};

const addMessageAction = (item) => ({
  type: ADD_MESSAGE,
  item
});

const Chat = () => {
  const [id, setId] = useState(0);
  const [messages, messagesDispatch] = useReducer(messagesReducer, []);

  const addMessage = (author = "", text) => {
    console.log(`addMessage: [ author: ${author} text: ${text}`);
    const message = createMessage(author, text);
    messagesDispatch(addMessageAction(message));

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
      <Input addMessage={addMessage}/>
    </div>
  );
};

export default Chat;
