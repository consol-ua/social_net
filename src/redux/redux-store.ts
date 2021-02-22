import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReduser from "./profile-reduser";
import siteBarReducer from "./site-bar-reducer";
import usersReducer from "./users-reduser";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reduser";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  auth: authReducer,
  dialogPage: dialogReducer,
  sitebarPage: siteBarReducer,
  profilePage: profileReduser,
  usersPage: usersReducer,
  app: appReducer
});

type ReducersType = typeof reducers
export type GlobalStateType = ReturnType<ReducersType>

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
