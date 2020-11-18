import React from "react";

import "./Message.css";

import botSVG from "../../data/bot.svg";
import userSVG from "../../data/user.svg";

const Message = ({ author, text }) => {

  let icon = null;
  let bubble = null;

  if (author === "Bot") {
    bubble = "bot";
    icon = botSVG;
  } else {
    bubble = "user";
    icon = userSVG;
  };

  return (
    <div>
      <div className="icon">
        <img src={icon} alt=""></img>
      </div>
      <div className={bubble}>
        <p>{text}</p>
      </div>
    </div>
  );

};

export default Message;
