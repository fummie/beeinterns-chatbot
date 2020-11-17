import React from "react";

import Messages from "../Messages";
import Input from "../Input";

import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;
