import React from "react";
import MyPostsContainer from "./myPosts/myPostsContainer";
import s from "./profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

type PropsType = any

let Profile: React.FC<PropsType> = (props) => {
  // console.log(props);
  return (
    <div className={s.profile}>
      <ProfileInfo state={props.profile.usersProfile} onEditMode={props.editMode} />
      <MyPostsContainer />
    </div>
  );
}
export default Profile