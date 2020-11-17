import React from "react";

import Text from "../Text";
import Submit from "../Submit";

import "./Input.css";

const Input = ({ addMessage }) => {

  const onSubmit = (event) => {
    event.preventDefault();
    const textarea = document.getElementById("textarea");
    addMessage("Fummie", textarea.value);
  };

  return (
    <form>
        <Text/>
        <Submit onSubmit={onSubmit}/>
    </form>
  );

};

export default Input;
