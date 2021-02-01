import React from "react";
import s from "./header.module.css";
import LoginContainer from "./login/LoginContainer";

export default function Header() {
  return (
    <div className={s.priv}>
      <h1>Header</h1>

      <LoginContainer />
    </div>
  );
}
