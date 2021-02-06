import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { GlobalStateType } from "../redux/redux-store";
type isAuth = {
  isAuth: boolean
}
export function WithAuthRedirect(WrappedComponent: React.ElementType) {
  class RedirectComponent extends React.Component<isAuth> {
    render() {
      return !this.props.isAuth ? (
        <Redirect to={"/login"} />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }
  let mapStateToProps = (state: GlobalStateType) => ({
    isAuth: state.auth.isAuth,
  });
  let ConnectedWithAuthComponent = connect(mapStateToProps)(RedirectComponent);
  return ConnectedWithAuthComponent;
}
