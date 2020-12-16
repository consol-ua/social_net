import React from "react";
import "./styles.css";
import Header from "./componenta/header/Header";
import Sitebar from "./componenta/sitebar/Sitebar";
import Profile from "./componenta/profile/Profile";
import News from "./componenta/news/News";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./componenta/dialogs/DialogsContainer";
import usersContainer from "./componenta/users/usersContainer";

export default function App(props) {
  let state = props.store.getState();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sitebar state={state.sitebarPage} />
        <Route
          path="/profile"
          render={() => (
            <Profile
              store={props.store}
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
        <Route path="/users" component={usersContainer} />
        {/* <Profile /> */}
      </div>
    </BrowserRouter>
  );
}
