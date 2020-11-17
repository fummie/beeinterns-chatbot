import React, { useState } from "react";

import Text from "../Text";
import Submit from "../Submit";

import "./Input.css";

const Input = ({ addMessage }) => {

  const [ready, setReady] = useState(false);

  const onSubmit = (event) => {

    event.preventDefault();

    const text = document.getElementById("textarea").value;
    const disabled = document.getElementById("submit-btn").disabled;

    if (!disabled)
      addMessage("Fummie", text);

  };

  return (
    <form>
        <Text setReady={setReady}/>
        <Submit onSubmit={onSubmit} ready={ready}/>
    </form>
  );

};

export default Input;
