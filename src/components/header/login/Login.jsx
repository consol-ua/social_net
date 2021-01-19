import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import s from "../header.module.css";

export default function Login(props) {
  return (
    <div className={s.loginBlock}>
      {props.isLoaded ? <Preloader /> : null}
      {!props.isAuth ? (
        <NavLink to={"/login"}>Login</NavLink>
      ) : (
        <NavLink to={"/profile/"}>
          <div>Login: {props.login}</div>
          <div>id: {props.id}</div>
        </NavLink>
      )}
    </div>
  );
}
