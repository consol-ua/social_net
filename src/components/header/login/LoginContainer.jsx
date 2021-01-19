import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, loaded } from "../../../redux/auth-reducer";

import Login from "./Login";

class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.loaded(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
      headers: {
        "API-KEY": "e727ac2e-86d0-4184-87d3-84b605c89df9",
      },
    }).then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
      this.props.loaded(false);
    });
  }
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isLoaded: state.auth.isLoaded,
  id: state.auth.id,
});

export default connect(mapStateToProps, {
  setAuthUserData,
  loaded,
})(LoginContainer);
