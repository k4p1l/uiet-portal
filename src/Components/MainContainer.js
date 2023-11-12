import React from "react";
import mc from "../styles/MainContainer.module.css";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";

const MainContainer = () => {
  return (
    <div className={mc.container}>
      <div className={mc.main}>
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
};

export default MainContainer;
