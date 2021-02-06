import React from "react";
import "./styles.css";
import Header from "./components/header/Header";
import Sitebar from "./components/sitebar/Sitebar";
import News from "./components/news/News";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import usersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import LoginPage from "./components/Login/LoginPage";

export default function App(props) {
  let state = props.store.getState();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sitebar state={state.sitebarPage} />
        <Route
          path="/profile/:userId?"
          render={() => (
            <ProfileContainer
            // store={props.store}
            // state={state.profilePage}
            // dispatch={props.state.dispatch}
            />
          )}
        />
        <Route
          path="/dialog"
          component={DialogsContainer}
          // render={() => (
          //   <DialogsContainer
          //   // store={props.store}
          //   // state={state.dialogPage} dispatch={props.store.dispatch}
          //   />
          // )}
        />
        <Route path="/news" component={News} />
        <Route path="/login" component={LoginPage} />
        <Route path="/users" component={usersContainer} />
        {/* <Profile /> */}
      </div>
    </BrowserRouter>
  );
}
