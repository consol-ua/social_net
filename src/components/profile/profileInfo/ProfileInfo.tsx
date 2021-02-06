import React from "react";
import s from "../profile.module.css";
import defaultPhoto from "../../../assets/image/default_profile_photo.png";
import Preloader from "../../common/Preloader/Preloader";
import Status from "./status/Status";
import { ProfileType } from "../../../redux/profile-reduser";

type PropsType = {
  state: ProfileType
  onEditMode: (edit: boolean) => void
}

let ProfileInfo: React.FC<PropsType> = (props) => {
  if (!props.state) {
    return <Preloader />;
  }
  return (
    <div className={s.profileInfo}>
      <div>
        <img
          className={s.logo}
          src={props.state.photos.large || defaultPhoto}
          alt="alt"
        />
      </div>
      <div>{props.state.fullName}</div>
      <Status status='Status' editMode={props.state.editMode} onEditMode={props.onEditMode} />
    </div>
  );
}
export default ProfileInfo