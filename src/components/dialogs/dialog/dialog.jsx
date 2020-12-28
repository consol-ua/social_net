import React from "react";
import s from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

export default function Dialog(props) {
  return (
    <div className={s.dialog__item}>
      <div className={s.dialog__img}>
        <img src={props.img} alt="" />
      </div>
      <div>
        <NavLink to={`/dialog/${props.id}`} activeClassName={s.active}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
}
