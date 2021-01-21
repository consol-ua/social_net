const SET_USERS = "SET_USERS";
const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_TOTOL_USERS_COUNT = "SET_TOTOL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const LOADED = "LOADED";

const initialState = {
  items: [
    // {
    //   name: "Shubert",
    //   id: 1,
    //   photos: {
    //     small:
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
    //     large: null
    //   },
    //   status: null,
    //   followed: false
    // },
    // {
    //   name: "Hacker",
    //   id: 2,
    //   photos: {
    //     small:
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1200px-Desert_Electric.jpg",
    //     large: null
    //   },
    //   status: null,
    //   followed: false
    // },
    // {
    //   name: "Dima",
    //   id: 3,
    //   photos: {
    //     small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
    //     large: null
    //   },
    //   status: null,
    //   followed: false
    // },
    // {
    //   name: "Anna",
    //   id: 4,
    //   photos: {
    //     small: "https://ktonanovenkogo.ru/image/priroda-gora.jpg",
    //     large: null
    //   },
    //   status: null,
    //   followed: false
    // }
  ],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isLoaded: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, items: [...action.users] };
    case FOLLOWED:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === action.idUser) {
            el.followed = true;
          }
          return el;
        }),
      };
    case UNFOLLOWED:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === action.idUser) {
            el.followed = false;
          }
          return el;
        }),
      };
    case SET_TOTOL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded,
      };

    default:
      return state;
  }
};

export const followOnClick = (idUser) => ({ type: FOLLOWED, idUser });
export const unFollowOnClick = (idUser) => ({ type: UNFOLLOWED, idUser });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({
  type: SET_TOTOL_USERS_COUNT,
  count,
});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const loaded = (isLoaded) => ({ type: LOADED, isLoaded });
export default usersReducer;
