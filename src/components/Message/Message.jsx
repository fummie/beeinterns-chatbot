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

  const set Size = () => {
    const textarea = document.getElementById("text-bubble");
    var minRows = textarea.getAttribute("min-rows")|0, rows;

    if (!textarea.baseScrollHeight)
      getScrollHeight(textarea);

    textarea.rows = minRows;
    rows = Math.ceil((textarea.scrollHeight - textarea.baseScrollHeight) / 35);
    textarea.rows = minRows + rows;
  };

  const getScrollHeight = (textarea) => {
    var savedValue = textarea.value;
    textarea.value = "";
    textarea.baseScrollHeight = textarea.scrollHeight;
    textarea.value = savedValue;
  };

  return (
    <div className="message">
      <div className="icon">
        <img src={icon} alt=""></img>
      </div>
      <textarea
        className={textBubble}
        id="text-bubble"
        readOnly
        value={text}
        onLoad={setSize}
      ></textarea>
    </div>
  );

};

export default Message;
