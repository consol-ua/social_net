import React, { useEffect } from "react";
import "./styles.css";
import Header from "./components/header/Header";
import Sitebar from "./components/sitebar/Sitebar";
import News from "./components/news/News";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import usersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import LoginPage from "./components/Login/LoginPage";
import { connect } from "react-redux";
import { compose } from "redux";
import { initialazed } from "./redux/app-reduser";
import Preloader from "./components/common/Preloader/Preloader";

function App(props) {
  let state = props.state;
  useEffect(() => {
    props.initialazed();
    console.log(1);
  }, [state.app.initialazed]);

  if (!state.app.inititalazed) {
    return <Preloader />;
  }
  return (
    <div className="App">
      <Header />
      <Sitebar state={state.sitebarPage} />
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/dialog" component={DialogsContainer} />
      <Route path="/news" component={News} />
      <Route path="/login" component={LoginPage} />
      <Route path="/users" component={usersContainer} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialazed })
)(App);
