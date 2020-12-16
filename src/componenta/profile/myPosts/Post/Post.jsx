import React from "react";
import s from "../myPosts.module.css";

export default function Post(props) {
  return (
    <div className={s.posts__item}>
      <div className={s.item_logo}>
        <img src={props.state.img} alt="alt" />
      </div>
      <div className={s.item__message}>{props.state.text}</div>
    </div>
  );
}
