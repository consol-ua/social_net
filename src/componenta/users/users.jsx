import * as axios from "axios";
import React from "react";
import s from "./users.module.css";

export default function Users(props) {
  // let userArr = [
  //   {
  //     name: "Shubert",
  //     id: 1,
  //     photos: {
  //       small:
  //         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
  //       large: null,
  //     },
  //     status: null,
  //     followed: false,
  //   },
  //   {
  //     name: "Hacker",
  //     id: 2,
  //     photos: {
  //       small:
  //         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
  //       large: null,
  //     },
  //     status: null,
  //     followed: false,
  //   },
  //   {
  //     name: "Dima",
  //     id: 3,
  //     photos: {
  //       small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
  //       large: null,
  //     },
  //     status: null,
  //     followed: false,
  //   },
  //   {
  //     name: "Anna",
  //     id: 4,
  //     photos: {
  //       small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
  //       large: null,
  //     },
  //     status: null,
  //     followed: false,
  //   },
  //   {
  //     name: "Katia",
  //     id: 5,
  //     photos: {
  //       small: null,
  //       large: null,
  //     },
  //     status: null,
  //     followed: false,
  //   },
  // ];
  let getUsers = () => {
    if (props.usersPage.items.length === 0) {
      // axios.defaults.withCredentials = true
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users", {
          withCredentials: true,
          headers: {
            "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9",
          },
        })
        .then((response) => props.setUsers(response.data.items));
      // props.setUsers(userArr);
    }
  };

  let userMap = props.usersPage.items.map((el) => {
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
            <button onClick={() => props.followOnClick(el.id)}>followed</button>
          )}
        </div>
      </div>
    );
  });
  return (
    <div className={s.users}>
      {userMap}
      <div className={s.more_users}>
        <button onClick={getUsers}>more users</button>
      </div>
    </div>
  );
}
