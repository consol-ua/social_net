import React from "react";
import { NavLink } from "react-router-dom";
import s from "../users.module.css";
import defaultPhoto from "../../../assets/image/default_profile_photo.png";
import { UsersType } from "../../../API/ApiType";

type PropsType = {
  user: UsersType
  followingInProgress: number[]
  followSuccess: (userId: number) => void
  unFollowSuccess: (userId: number) => void
  auth: boolean
}

let User: React.FC<PropsType> = (props) => {
  let userImg = props.user.photos.small
    ? props.user.photos.small
    : props.user.photos.large
      ? props.user.photos.large
      : defaultPhoto;
  return (
    <div className={s.user}>
      <NavLink to={`/profile/${props.user.id}`} className={s.user__img}>
        <img src={userImg} alt="" />
      </NavLink>
      <div className={s.user__info}>
        <div className={s.user__name}>{props.user.name}</div>
        <div className={s.user__status}>
          {props.user.status ? props.user.status : "I'm not write a status"}
        </div>
      </div>
      {props.auth &&
        <div className={s.user__button}>
          {props.user.followed ? (
            <button
              disabled={props.followingInProgress.some(
                (element) => element === props.user.id
              )}
              onClick={() => {
                props.unFollowSuccess(props.user.id);
              }}
            >
              unfollowed
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some(
                (element) => element === props.user.id
              )}
              onClick={() => {
                props.followSuccess(props.user.id);
              }}
            >
              followed
            </button>
          )}
        </div>}
    </div>
  );
}


export default User