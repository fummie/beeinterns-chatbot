import React from "react";

import "./Submit.css";

const Submit = ({ onSubmit }) => {
  return (
    <button
      id="submit"
      onClick={onSubmit}
    ></button>
  );
};

export default Submit;
