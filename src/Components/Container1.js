import React from "react";
import  c1  from "../styles/container1.module.css";
const Container1 =()=> {
  return (
    <div className={c1.c1}>
      <span className={c1.notices}>NOTICES AND UPDATES</span>
      <ul>
        <li>
          <h2 className={c1.headings}>Result Updates</h2>
          <p className={c1.content}>2nd year results updated</p>
        </li>
        <li>
          <h2 className={c1.headings}>Even sem Result</h2>
          <p className={c1.content}>
            Results of 2nd ,4th and 8th sem has been released.
          </p>
        </li>
        <li>
          <h2 className={c1.headings}>Goonj Coming real soon!</h2>
        </li>
      </ul>
    </div>
  );
}

export default Container1;
