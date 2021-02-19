import { ThunkAction } from "redux-thunk";
import { authAPI, userAPI } from "../API/API";
import { AuthResultCodeEnum } from "../API/ApiType";
import { GlobalStateType } from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";
const LOADED = "LOADED";
const ERROR_AUTH = "ERROR_AUTH";

type LoadedActionType = {
  type: typeof LOADED
  isLoaded: boolean
}

type ErrorAuthType = {
  type: typeof ERROR_AUTH
  errorAuth: string
}
type AuthDataType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  data: AuthDataType
}
type ActionType = SetAuthUserDataActionType | LoadedActionType | ErrorAuthType
type InitialStateType = {
  id: number | null
  email: string | null
  login: string | null
  isLoaded: boolean
  isAuth: boolean
  errorAuth: string
}

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isLoaded: false,
  isAuth: false,
  errorAuth: ''
};
const authReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        errorAuth: ''
      };
    case LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded,
      };
    case ERROR_AUTH:
      return {
        ...state,
        errorAuth: action.errorAuth
      };
    default:
      return state;
  }
};


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

export const loaded = (isLoaded: boolean): LoadedActionType => ({
  type: LOADED,
  isLoaded,
});
export const errorAuth = (errorAuth: string): ErrorAuthType => ({
  type: ERROR_AUTH,
  errorAuth
});

type CastomThunkType = ThunkAction<void, GlobalStateType, unknown, ActionType>
export const getAuth = (): CastomThunkType => {
  return (dispatch) => {
    dispatch(loaded(true));
    return userAPI.getAuth().then((response) => {
      if (response.resultCode === AuthResultCodeEnum.Success) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login, true));
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
        dispatch(errorAuth(res.messages.join()))
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
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(loaded(false))
      } else {
        console.log('invalid exit')
        dispatch(loaded(false))
      }
    })
  }
}

export default authReducer;