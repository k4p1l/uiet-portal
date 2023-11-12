import React from "react";
import c3 from "../styles/container3.module.css";

const Container3 = () => {
  return (
    <div className={c3.c3}>
      <h1>Result Portal</h1>
      <div className={c3.form}>
        <input type="text" placeholder=" Username" />
        <input type="text" placeholder=" Password" />
        <select id="userRole" name="userRole">
          <option disabled selected>
            UserRole
          </option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button className={c3.forgotBtn}>Forgot Password </button>
      </div>

      <button className={c3.signBtn}>Sign In</button>
    </div>
  );
};

export default Container3;