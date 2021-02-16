import React from "react";

import Header from "../Header";
import Chat from "../Chat";

import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <Header/>
      <Chat/>
    </div>
  );
};

export default Container;
