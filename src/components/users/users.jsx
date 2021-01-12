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
              <button onClick={() => props.unFollowOnClick(el.id)}>
                unfollowed
              </button>
            ) : (
              <button onClick={() => props.followOnClick(el.id)}>
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
        {pages.length < 15 ? (
          pages.map((el) => {
            return (
              <span
                key={el}
                className={props.currentPage === el && s.activePage}
                onClick={(e) => {
                  props.onPageChanged(el);
                }}
              >
                {el}
              </span>
            );
          })
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className={s.users}>{renderUsers()}</div>
    </div>
  );
}
