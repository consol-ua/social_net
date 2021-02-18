import { ThunkAction } from "redux-thunk";
import { authAPI, userAPI } from "../API/API";
import { AuthResultCodeEnum } from "../API/ApiType";
import { GlobalStateType } from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";
const LOADED = "LOADED";
const LOGUOT = "LOGUOT";

type LoadedActionType = {
  type: typeof LOADED
  isLoaded: boolean
}
type LogutActionType = {
  type: typeof LOGUOT
}
type AuthDataType = {
  id: number | null
  email: string | null
  login: string | null
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  data: AuthDataType
}
type ActionType = SetAuthUserDataActionType | LoadedActionType | LogutActionType
type InitialStateType = {
  id: number | null
  email: string | null
  login: string | null
  isLoaded: boolean
  isAuth: boolean
}

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isLoaded: false,
  isAuth: false,
};
const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded,
      };
    case LOGUOT:
      return {
        ...state,
        id: null,
        email: null,
        login: null
      }

    default:
      return state;
  }
};


export const setAuthUserData = (id: number | null, email: string | null, login: string | null): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const loaded = (isLoaded: boolean): LoadedActionType => ({
  type: LOADED,
  isLoaded,
});

export const loguot = (): LogutActionType => ({ type: LOGUOT })

type CastomThunkType = ThunkAction<void, GlobalStateType, unknown, ActionType>
export const getAuth = (): CastomThunkType => {
  return (dispatch) => {
    dispatch(loaded(true));
    userAPI.getAuth().then((response) => {
      if (response.resultCode === AuthResultCodeEnum.Success) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login));
      }
      dispatch(loaded(false));
    });
  };
};

type authData = {
  email: string, password: string, rememberMe: boolean
}

export const authorization = (data: authData): CastomThunkType => {
  return (dispatch) => {
    dispatch(loaded(true));
    authAPI.login(data.email, data.password, data.rememberMe).then((res) => {
      if (res.resultCode === AuthResultCodeEnum.Success) {
        dispatch(getAuth())
      } else {
        console.log('invalid login')
      }
      dispatch(loaded(false))
    })
  }
}

export const unAuthorization = (): CastomThunkType => {
  return (dispatch) => {
    dispatch(loaded(true));
    authAPI.unLogin().then((res) => {
      console.log(res)
      if (res.resultCode === AuthResultCodeEnum.Success) {
        // dispatch(getAuth())
        dispatch(loguot())
        dispatch(loaded(false))
      } else {
        console.log('invalid exit')
        dispatch(loaded(false))
      }
    })
  }
}

export default authReducer;