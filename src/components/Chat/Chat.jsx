import React, { useReducer, useEffect }  from "react";

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

  useEffect(() => {
    const welcomeMessage = {author: "Bot", text: "Напиши /start"};
    messagesDispatch(addMessageAction(welcomeMessage));
  }, []);

  const addMessage = (author = "", text) => {
    const message = createMessage(author, text);
    messagesDispatch(addMessageAction(message));

    if (author !== "Bot")
      addRespond(message);
  };

  const addRespond = (message) => {
    const author = "Bot";
    var text = "";

    switch (message.text) {
      case "/start":
        text = "Привет, меня зовут Чат-бот, а как зовут тебя?";
        break;
      default:
        text = "Я не понимаю, введите другую команду!";
        break;
    };

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
