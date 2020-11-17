import React, { useEffect } from "react";

import "./Submit.css";

import readySVG from "../../data/ready.svg";
import unreadySVG from "../../data/unready.svg";

const Submit = ({ onSubmit, ready }) => {

  useEffect(() => {

    const submitIMG = document.getElementById("submit-img");
    const submitBTN = document.getElementById("submit-btn");

    if (ready) {
      submitIMG.src = readySVG;
      submitBTN.disabled = false;
    } else {
      submitIMG.src = unreadySVG;
      submitBTN.disabled = true;
    }

  }, [ready]);

  return (
    <button
      id="submit-btn"
      onClick={onSubmit}
    >
      <img id="submit-img" alt=""/>
    </button>
  );
};

export default Submit;
