import React from "react";

import "./Input.css";

const Input = () => {

  const resize = () => {
    const textarea = document.getElementById("input");

    var minRows = textarea.getAttribute('data-min-rows')|0, rows;
    !textarea._baseScrollHeight && getScrollHeight(textarea);

    textarea.rows = minRows;
    rows = Math.ceil((textarea.scrollHeight - textarea._baseScrollHeight) / 34);
    textarea.rows = minRows + rows;
  };

  const getScrollHeight = (textarea) => {
    var savedValue = textarea.value;
    textarea.value = '';
    textarea._baseScrollHeight = textarea.scrollHeight;
    textarea.value = savedValue;
    console.log(textarea._baseScrollHeight);
  };

  return (
    <form>

      <textarea
        id="input"
        data-min-rows="1"
        rows="1"
        onKeyUp={resize}
      ></textarea>

      <button type="submit"
      ></button>

    </form>
  );

};

export default Input;
