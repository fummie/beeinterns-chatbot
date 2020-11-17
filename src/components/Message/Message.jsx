import React from "react";

import "./Message.css";

const Message = ({ author, text }) => {
  return (
    <span>
      <p>Author: {author}</p>
      <p>Text: {text}</p>
    </span>
  );
};

export default Message;
