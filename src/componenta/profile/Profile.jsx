import React from "react";
import MyPostsContainer from "./myPosts/myPostsContainer";
import s from "./profile.module.css";

export default function Profile(props) {
  let state = props.store.getState();
  return (
    <div className={s.profile}>
      <div>banner</div>
      <div>
        <div>
          <img className={s.logo} src={state.profilePage.logo} alt="alt" />
        </div>
        <div>name and last name</div>
      </div>
      <MyPostsContainer
      // state={props.state} dispatch={props.dispatch}
      />
    </div>
  );
}
