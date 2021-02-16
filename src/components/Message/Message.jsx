import React from "react";

import "./Message.css";

import botSVG from "../../data/bot.svg";
import userSVG from "../../data/user.svg";

const Message = ({ author, text }) => {

  let icon = null;
  let textBubble = "text-bubble";

  if (author === "Bot") {
    textBubble += " bot";
    icon = botSVG;
  } else {
    textBubble += " user";
    icon = userSVG;
  };

  return (
    <div className="message">
      <div className="icon">
        <img src={icon} alt=""></img>
      </div>
      <div className={textBubble}>
        {text}
      </div>
    </div>
  );

};

export default Message;
