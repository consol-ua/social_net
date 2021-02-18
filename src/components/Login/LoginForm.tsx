import React from "react";
import { Form, Field } from "react-final-form";
import s from "./loginpage.module.css"

type authData = {
  email: string, password: string, rememberMe: boolean
}
type PropsType = {
  onSubmit: (data: authData) => void
}
const LoginForm: React.FC<PropsType> = (props) => {
  // const onSubmit = (value) => console.log(value);
  return (
    <Form
      onSubmit={props.onSubmit}
      initialValues={{ email: "", password: "", rememberMe: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} className={s.loginForm}>
          <label>
            <span>email: </span>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="email"
            />
            {/* <input type="text" /> */}
          </label>
          <label>
            <span>password: </span>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="password"
            />
            {/* <input type="password" /> */}
          </label>
          <label>
            <span>rememberMe: </span>
            <Field name="rememberMe" component="input" type="checkbox" />
            {/* <input type="checkbox" /> */}
          </label>
          <button type="submit" disabled={submitting || pristine}>
            login
          </button>
        </form>
      )}
    />
  );
};

export default LoginForm;
