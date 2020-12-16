import React from "react";
import s from "./../sitebar.module.css";

const FriendOnline = (props) => {
  let friendEl = props.state.map((el) => {
    return (
      <div key={el.id} className={s.friendItem}>
        <div className={s.friendItemName}>{el.name}</div>
        <div className={s.friendItemImg}>
          <img src={el.img} alt="" />
        </div>
      </div>
    );
  });
  return (
    <div className={s.friend}>
      <h3>Friend Online</h3>
      <div className={s.friendItems}>{friendEl}</div>
    </div>
  );
};

export default FriendOnline;
