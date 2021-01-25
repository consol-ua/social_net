import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../../redux/auth-reducer";

import Login from "./Login";

class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
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
  getAuth,
})(LoginContainer);
