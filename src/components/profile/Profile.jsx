import React from "react";
import MyPostsContainer from "./myPosts/myPostsContainer";
import s from "./profile.module.css";
import ProfileInfo from "./profileInfo/ProfoleInfo";

export default function Profile(props) {
  // console.log(props);
  return (
    <div className={s.profile}>
      <ProfileInfo state={props.profile.usersProfile} />
      <MyPostsContainer />
    </div>
  );
}
