import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { GlobalStateType } from "../../redux/redux-store";
import s from "./loginpage.module.css";
import LoginForm from "./LoginForm";
import { authorization } from "../../redux/auth-reducer";

type authData = {
  email: string, password: string, rememberMe: boolean
}
type PropsType = {
  isAuth: boolean
  authorization: (data: authData) => void
}

const LoginPage: React.FC<PropsType> = (props) => {
  // const onSubmit = (value: any) => console.log(props);
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div className={s.loginContainer}>
      <h1>Login</h1>
      <LoginForm onSubmit={props.authorization} />
    </div>
  );
}

let mapStateToProps = (state: GlobalStateType) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { authorization })(LoginPage)
