import React from "react";

import Message from "../Message";

import "./Messages.css";

const Messages = ({ messages }) => {

  const list = [];
  for (var index = messages.length - 1; index >= 0; index--)
    list.push(
      (<li key={index}>
          <Message { ...messages[index] }/>
        </li>)
    )

  return (
    <ul className="message-list">
      {list}
    </ul>
  );
};

export default Messages;
