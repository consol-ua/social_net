import * as axios from "axios";
import React from "react";
import s from "./users.module.css";

class UsersClass extends React.Component {
  userArr = [
    {
      name: "Shubert",
      id: 6,
      photos: {
        small:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
        large: null
      },
      status: null,
      followed: false
    },
    {
      name: "Hacker",
      id: 7,
      photos: {
        small:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
        large: null
      },
      status: null,
      followed: false
    },
    {
      name: "Dima",
      id: 8,
      photos: {
        small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
        large: null
      },
      status: null,
      followed: false
    },
    {
      name: "Anna",
      id: 9,
      photos: {
        small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
        large: null
      },
      status: null,
      followed: false
    },
    {
      name: "Katia",
      id: 10,
      photos: {
        small: null,
        large: null
      },
      status: null,
      followed: false
    }
  ];
  setUsers = () => {
    // axios
    //   .get("https://social-network.samuraijs.com/api/1.0/users", {
    //     withCredentials: true,
    //     headers: {
    //       "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9",
    //     },
    //   })
    //   .then((response) => this.props.setUsers(response.data.items));
    this.props.setUsers(this.userArr);
  };

  render() {
    return (
      <div className={s.users}>
        {this.props.usersPage.items.map((el) => {
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
                  <button onClick={() => this.props.unFollowOnClick(el.id)}>
                    unfollowed
                  </button>
                ) : (
                  <button onClick={() => this.props.followOnClick(el.id)}>
                    followed
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className={s.more_users}>
          <button onClick={this.getUsers}>more users</button>
        </div>
      </div>
    );
  }
}

export default UsersClass;
