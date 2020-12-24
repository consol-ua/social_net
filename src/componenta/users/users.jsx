import React from "react";
import s from "./users.module.css";

export default function Users(props) {
  let renderUsers = () => {
    return props.usersPage.items.map((el) => {
      let userImg = el.photos.small
        ? el.photos.small
        : el.photos.large
        ? el.photos.large
        : "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";
      return (
        <div className={s.user} key={el.id}>
          <div className={s.user__img}>
            <img src={userImg} alt="" />
          </div>
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
  return (
    <div className={s.users}>
      {renderUsers()}
      <div className={s.more_users}>
        <button onClick={props.setUsers}>more users</button>
      </div>
    </div>
  );
}
