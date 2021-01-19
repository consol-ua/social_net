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

export default authReducer;
