import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import s from "./users.module.css";
import defaultPhoto from "../../assets/image/default_profile_photo.png";

export default function Users(props) {
  let renderUsers = () => {
    return props.usersPage.items.map((el) => {
      let userImg = el.photos.small
        ? el.photos.small
        : el.photos.large
        ? el.photos.large
        : defaultPhoto;
      return (
        <div className={s.user} key={el.id}>
          <NavLink to={`/profile/${el.id}`} className={s.user__img}>
            <img src={userImg} alt="" />
          </NavLink>
          <div className={s.user__info}>
            <div className={s.user__name}>{el.name}</div>
            <div className={s.user__status}>
              {el.status ? el.status : "I'm not write a status"}
            </div>
          </div>
          <div className={s.user__button}>
            {el.followed ? (
              <button
                disabled={props.followingInProgress.some(
                  (element) => element === el.id
                )}
                onClick={() => {
                  props.unFollowSuccess(el.id);
                  // props.toggleFollowingInProgress(true, el.id);
                  // userAPI.delFollowUser(el.id).then((response) => {
                  //   if (response.resultCode === 0) {
                  //     props.unFollowOnClick(el.id);
                  //   }
                  //   props.toggleFollowingInProgress(false, el.id);
                  // });
                }}
              >
                unfollowed
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some(
                  (element) => element === el.id
                )}
                onClick={() => {
                  props.followSuccess(el.id);
                  // props.toggleFollowingInProgress(true, el.id);
                  // userAPI.postFollowUser(el.id).then((response) => {
                  //   if (response.resultCode === 0) {
                  //     props.followOnClick(el.id);
                  //   }
                  //   props.toggleFollowingInProgress(false, el.id);
                  // });
                }}
              >
                followed
              </button>
            )}
          </div>
        </div>
      );
    });
  };
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let firstPage = props.currentPage === pages[0];
  let lastPages = props.currentPage === pages[pages.length - 1];
  return (
    <div className={s.container}>
      {props.isLoaded ? <Preloader /> : null}
      <div className={s.pages_count}>
        <>
          <span
            className={[s.previous, firstPage && s.unActive].join(" ")}
            onClick={(e) => {
              if (props.currentPage > 1) {
                props.onPageChanged(1);
              }
            }}
          >
            -- FIRST PAGE --
          </span>
          <span
            className={[s.previous, firstPage && s.unActive].join(" ")}
            onClick={(e) => {
              if (props.currentPage > 1) {
                props.onPageChanged(props.currentPage - 1);
              }
            }}
          >
            Previous page
          </span>
          <span>{props.currentPage + ` (${pages.length})`}</span>
          <span
            className={[s.next, lastPages && s.unActive].join(" ")}
            onClick={(e) => {
              if (props.currentPage < pages.length) {
                props.onPageChanged(props.currentPage + 1);
              }
            }}
          >
            Next Page
          </span>
          <span
            className={[s.next, lastPages && s.unActive].join(" ")}
            onClick={(e) => {
              if (props.currentPage < pages.length) {
                props.onPageChanged(pagesCount);
              }
            }}
          >
            -- LAST PAGE --
          </span>
        </>
      </div>
      <div className={s.users}>{renderUsers()}</div>
    </div>
  );
}
