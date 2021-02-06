import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReduser from "./profile-reduser";
import siteBarReducer from "./site-bar-reducer";
import usersReducer from "./users-reduser";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  auth: authReducer,
  dialogPage: dialogReducer,
  sitebarPage: siteBarReducer,
  profilePage: profileReduser,
  usersPage: usersReducer,
});

type ReducersType = typeof reducers
export type GlobalStateType = ReturnType<ReducersType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
