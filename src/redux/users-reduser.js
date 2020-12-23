const SET_USERS = "SET_USERS";
const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";

const initialState = {
  items: [
    {
      name: "Shubert",
      id: 1,
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
      id: 2,
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
      id: 3,
      photos: {
        small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
        large: null
      },
      status: null,
      followed: false
    },
    {
      name: "Anna",
      id: 4,
      photos: {
        small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
        large: null
      },
      status: null,
      followed: false
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, items: [...state.items, ...action.users] };
    case FOLLOWED:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === action.idUser) {
            el.followed = true;
          }
          return el;
        })
      };
    case UNFOLLOWED:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === action.idUser) {
            el.followed = false;
          }
          return el;
        })
      };

    default:
      return state;
  }
};

export const followOnClick = (idUser) => ({ type: FOLLOWED, idUser });
export const unFollowOnClick = (idUser) => ({ type: UNFOLLOWED, idUser });
export const setUsers = (users) => ({ type: SET_USERS, users });
export default usersReducer;
