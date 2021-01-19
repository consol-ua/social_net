import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReduser from "./profile-reduser";
import siteBarReducer from "./site-bar-reducer";
import usersReducer from "./users-reduser";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
  dialogPage: dialogReducer,
  sitebarPage: siteBarReducer,
  profilePage: profileReduser,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;
