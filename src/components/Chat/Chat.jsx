import React, { useReducer }  from "react";

import Messages from "../Messages";
import Input from "../Input";

import "./Chat.css";

//----------------------------------------------------------------------------------------------------------------------

const ADD_MESSAGE = "ADD_MESSAGE";

const messagesReducer = (messages, messagesAction) => {
  switch (messagesAction.type) {
    case ADD_MESSAGE:
      return [...messages, messagesAction.message];
    default:
      return messages;
  };
};

const addMessageAction = (message) => ({
  type: ADD_MESSAGE,
  message
});

//----------------------------------------------------------------------------------------------------------------------

const Chat = () => {
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
    return {
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
