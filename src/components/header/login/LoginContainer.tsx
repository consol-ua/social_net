import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../../redux/auth-reducer";
import { GlobalStateType } from "../../../redux/redux-store";

import Login from "./Login";

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
  isLoaded: boolean
  id: number | null
}

type MapDispatchToPropsType = {
  getAuth: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class LoginContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getAuth();
  }
  render() {
    return <Login {...this.props} />;
  }
}

const mapStateToProps = (state: GlobalStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isLoaded: state.auth.isLoaded,
  id: state.auth.id,
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, GlobalStateType>(mapStateToProps, {
  getAuth,
})(LoginContainer);
