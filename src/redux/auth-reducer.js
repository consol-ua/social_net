import { userAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";
const LOADED = "LOADED";

const initialState = {
  id: null,
  email: null,
  login: null,
  isLoaded: false,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});
export const loaded = (isLoaded) => ({
  type: LOADED,
  isLoaded,
});

export const getAuth = () => {
  return (dispatch) => {
    dispatch(loaded(true));
    userAPI.getAuth().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserData(id, email, login));
      }
      dispatch(loaded(false));
    });
  };
};

export default authReducer;
