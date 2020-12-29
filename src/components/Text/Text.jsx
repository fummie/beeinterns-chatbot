import React from "react";

import "./Text.css";

const Text = ({ setReady }) => {

  const resize = () => {
    const textarea = document.getElementById("text-input");
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

  const checkReady = () => {
    const textarea = document.getElementById("textarea");
    setReady(textarea.value !==  "");
  };

//TODO Why OnKeyPress does not work?

  return (
    <textarea
      className="text-input"
      id="text-input"
      min-rows="1"
      rows="1"
      onKeyDown={() => {resize(); checkReady()}}
      onKeyUp={() => {resize(); checkReady()}}
    ></textarea>
  );

};

export default Text;
