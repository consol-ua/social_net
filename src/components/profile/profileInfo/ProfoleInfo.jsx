import React from "react";
import s from "../profile.module.css";
import defaultPhoto from "../../../assets/image/default_profile_photo.png";
import Preloader from "../../common/Preloader/Preloader";

export default function ProfileInfo(props) {
  console.log(props);
  if (!props.state) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={s.logo}
          src={props.state.photos.large || defaultPhoto}
          alt="alt"
        />
      </div>
      <div>{props.state.fullName}</div>
    </div>
  );
}
