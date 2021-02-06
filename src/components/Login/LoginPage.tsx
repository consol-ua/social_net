import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { GlobalStateType } from "../../redux/redux-store";
import s from "./loginpage.module.css";
type isAuth = {
  isAuth: boolean
}
const LoginPage: React.FC<isAuth> = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div className={s.loginContainer}>
      Please enter your login
    </div>
  );
}

let mapStateToProps = (state: GlobalStateType) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps)(LoginPage)
