import React from "react";

import Message from "../Message";

import "./Messages.css";

const Messages = ({ messages }) => {

  const list = messages.slice(0).reverse().map((message, index) => {
    return (
      <li key={index}>
        <Message { ...message }/>
      </li>
    )
  });

  return (
    <ul>
      {list}
    </ul>
  );
};

export default Messages;
