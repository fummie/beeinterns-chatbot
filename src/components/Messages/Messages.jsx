import React from "react";

import Message from "../Message";

import "./Messages.css";

const Messages = ({ messages }) => {

  const list = messages.map((message) => {
    const { id, ...other } = message;
    return (
      <li key={id}>
        <Message { ...other }/>
      </li>
    )
  });

  return (
    <ul className="messages">
      {list}
    </ul>
  );
};

export default Messages;
