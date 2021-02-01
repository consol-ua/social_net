import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { userAPI } from "../API/API";
import { GlobalStateType } from "./redux-store";

const SET_USERS = "SET_USERS";
const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_TOTOL_USERS_COUNT = "SET_TOTOL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const LOADED = "LOADED";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

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
  ] as Array<any>,
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isLoaded: false,
  followingInProgress: [] as Array<number>,
};

type InitialStateType = typeof initialState
type ActionsType = FollowOnClickActionType | UnFollowOnClickActionType | SetUsersActionType |
  SetTotalUsersCountActionType | SetCurrentPageActionType | LoadedActionType | ToggleFollowingInProgressActionType
const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isLoaded
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};


type FollowOnClickActionType = {
  type: typeof FOLLOWED
  idUser: number
}
export const followOnClick = (idUser: number): FollowOnClickActionType => ({ type: FOLLOWED, idUser });
type UnFollowOnClickActionType = {
  type: typeof UNFOLLOWED
  idUser: number
}
export const unFollowOnClick = (idUser: number): UnFollowOnClickActionType => ({ type: UNFOLLOWED, idUser });
type SetUsersActionType = {
  type: typeof SET_USERS
  users: any
}
export const setUsers = (users: any): SetUsersActionType => ({ type: SET_USERS, users });
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTOL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({
  type: SET_TOTOL_USERS_COUNT,
  count,
});
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  page: number
}
export const setCurrentPage = (page: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, page });
type LoadedActionType = {
  type: typeof LOADED
  isLoaded: boolean
}
export const loaded = (isLoaded: boolean): LoadedActionType => ({ type: LOADED, isLoaded });
type ToggleFollowingInProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS
  isLoaded: boolean
  userId: number
}
export const toggleFollowingInProgress = (isLoaded: boolean, userId: number): ToggleFollowingInProgressActionType => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isLoaded,
  userId,
});

export const getUsersThunkCreator = (pageSize: number, currentPage: number) => {
  return (dispatch: Dispatch<ActionsType>, getState: () => GlobalStateType) => {
    dispatch(loaded(true));
    dispatch(setCurrentPage(currentPage));
    userAPI.getUsers(pageSize, currentPage).then((response: any) => {
      dispatch(setTotalUsersCount(response.totalCount));
      dispatch(setUsers(response.items));
      dispatch(loaded(false));
    });
  };
};

type DispatchType = Dispatch<ActionsType>
type GetStateType = () => GlobalStateType
export const followSuccess = (userId: number) => {
  return (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(toggleFollowingInProgress(true, userId));
    userAPI.postFollowUser(userId).then((response: any) => {
      if (response.resultCode === 0) {
        dispatch(followOnClick(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

type CastomThunkType = ThunkAction<void, GlobalStateType, unknown, ActionsType> // можно использовать вместо длинной строки
export const unFollowSuccess = (userId: number): ThunkAction<void, GlobalStateType, unknown, ActionsType> => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    userAPI.delFollowUser(userId).then((response: any) => {
      if (response.resultCode === 0) {
        dispatch(unFollowOnClick(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
