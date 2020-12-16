import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sitebar.module.css";
import FriendOnline from "./FriendOnline/FriendOnline";

export default function Sitebar(props) {
  return (
    <div className={s.sitebar}>
      <div className={s.link}>
        <NavLink to="/profile" activeClassName={s.active}>
          profile
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/dialog" activeClassName={s.active}>
          dialog
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/news" activeClassName={s.active}>
          news
        </NavLink>
      </div>
      <div className={s.link}>
        <NavLink to="/users" activeClassName={s.active}>
          users
        </NavLink>
      </div>
      <FriendOnline state={props.state.FriendOnline} />
    </div>
  );
}
