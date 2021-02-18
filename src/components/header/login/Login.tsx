import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import s from "../header.module.css";

type PropsType = {
  isAuth: boolean
  login: string | null
  isLoaded: boolean
  id: number | null
  unAuthorization: () => void
}

let Login: React.FC<PropsType> = (props) => {
  return (
    <div className={s.loginBlock}>
      {props.isLoaded ? <Preloader /> : null}
      {!props.isAuth ? (
        <NavLink to={"/login"}>Login</NavLink>
      ) : (
        <div>
          <NavLink to={"/profile/"}>
            <div>Login: {props.login}</div>
            <div>id: {props.id}</div>
          </NavLink>
          <button onClick={props.unAuthorization}>exit</button>
        </div>
      )}
    </div>
  );
}
export default Login