import React from "react";
import logo from "../uiet-logo.png";
import c2 from "../styles/container2.module.css";

const Container2 = () => {
  return (
      <div className={c2.c2}>
      <img src={logo} alt="logo" />
          <span className={c2.uiet}>UIET,PANJAB UNIVERSITY</span>
    </div>
  );
};

export default Container2
