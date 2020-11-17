import React from "react";

import "./Text.css";

const Text = () => {

  const resize = () => {
    const textarea = document.getElementById("textarea");
    var minRows = textarea.getAttribute("min-rows")|0, rows;

    if (!textarea.baseScrollHeight)
      getScrollHeight(textarea);

    textarea.rows = minRows;
    rows = Math.ceil((textarea.scrollHeight - textarea.baseScrollHeight) / 34);
    textarea.rows = minRows + rows;
  };

  const getScrollHeight = (textarea) => {
    var savedValue = textarea.value;
    textarea.value = '';
    textarea.baseScrollHeight = textarea.scrollHeight;
    textarea.value = savedValue;
  };

  return (
    <textarea
      id="textarea"
      min-rows="1"
      rows="1"
      onKeyUp={resize}
    ></textarea>
  );

};

export default Text;
