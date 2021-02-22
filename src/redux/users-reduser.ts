import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { userAPI } from "../API/API";
import { mapArrayCondition } from "../secondary/secondaryFunction";
import { GlobalStateType } from "./redux-store";

const SET_USERS = "users-reducer/SET_USERS";
const FOLLOWED = "users-reducer/FOLLOWED";
const UNFOLLOWED = "users-reducer/UNFOLLOWED";
const SET_TOTOL_USERS_COUNT = "users-reducer/SET_TOTOL_USERS_COUNT";
const SET_CURRENT_PAGE = "users-reducer/SET_CURRENT_PAGE";
const LOADED = "users-reducer/LOADED";
const TOGGLE_FOLLOWING_PROGRESS = "users-reducer/TOGGLE_FOLLOWING_PROGRESS";

const initialState = {
  items: [] as Array<any>,
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
        items: mapArrayCondition(state.items, "id", action.idUser, "followed", true)
      };
    case UNFOLLOWED:
      return {
        ...state,
        items: mapArrayCondition(state.items, "id", action.idUser, "followed", false)
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
export const setUsers = (users: Array<any>): SetUsersActionType => ({ type: SET_USERS, users });
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
  return async (dispatch: Dispatch<ActionsType>, getState: () => GlobalStateType) => {
    dispatch(loaded(true));
    dispatch(setCurrentPage(currentPage));
    const response = await userAPI.getUsers(pageSize, currentPage)
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(setUsers(response.items));
    dispatch(loaded(false));
  };
};

type DispatchType = Dispatch<ActionsType>
type GetStateType = () => GlobalStateType
export const followSuccess = (userId: number) => {
  return async (dispatch: DispatchType, getState: GetStateType) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const response = await userAPI.postFollowUser(userId)
    if (response.resultCode === 0) {
      dispatch(followOnClick(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  };
};

type CastomThunkType = ThunkAction<void, GlobalStateType, unknown, ActionsType>
export const unFollowSuccess = (userId: number): CastomThunkType => {
  return async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const response = await userAPI.delFollowUser(userId)
    if (response.resultCode === 0) {
      dispatch(unFollowOnClick(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  };
};

export default usersReducer;
