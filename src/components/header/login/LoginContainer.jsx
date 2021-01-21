import React from "react";
import { connect } from "react-redux";
import { userAPI } from "../../../API/API";
import { setAuthUserData, loaded } from "../../../redux/auth-reducer";

import Login from "./Login";

class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.loaded(true);
    userAPI.getAuth().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
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
