import React from "react";
import { Form, Field } from "react-final-form";
import s from "./loginpage.module.css"

type authData = {
  email: string, password: string, rememberMe: boolean
}
type PropsType = {
  onSubmit: (data: authData) => void
  errorAuth: string
}
const LoginForm: React.FC<PropsType> = (props) => {
  // const onSubmit = (value) => console.log(value);
  const required = (value: any) => value ? undefined : "Enter email"
  const minValue = (min: number) => (value: string) =>
    value.length >= min ? undefined : `Min length ${min}`
  const composeValidators = (...validators: any) => (value: any) =>
    validators.reduce((error: any, validator: any) => error || validator(value), undefined)

  return (
    <Form
      onSubmit={props.onSubmit}
      initialValues={{ email: "", password: "", rememberMe: false }}
      render={({ handleSubmit, submitting, pristine, values, errors }) => (
        <form onSubmit={handleSubmit} className={s.loginForm} onClick={() => console.log(errors)}>
          <Field name="email" validate={required}>
            {({ input, meta }) => (
              <label>
                <span>email: </span>
                <div>
                  <input {...input} type="text" placeholder="email" className={((meta.error && meta.touched) ? s.errorInput : '')} />
                  {meta.error && meta.touched && <span className={s.errorMessage}>{meta.error}</span>}
                </div>
              </label>
            )}
          </Field>
          <Field name="password" validate={composeValidators(required, minValue(5))}>
            {({ input, meta }) => (
              <label>
                <span>password: </span>
                <div>
                  <input {...input} type="password" placeholder="password" className={((meta.error && meta.touched) ? s.errorInput : '')} />
                  {meta.error && meta.touched && <span className={s.errorMessage}>{meta.error}</span>}

                </div>
              </label>
            )}
          </Field>
          {/* <label>
            <span>password: </span>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="password"
            /> */}
          {/* <input type="password" /> */}
          {/* </label> */}
          <label>
            <span>rememberMe: </span>
            <Field name="rememberMe" component="input" type="checkbox" />
            {/* <input type="checkbox" /> */}
            {props.errorAuth && <span className={s.errorMessage}>{props.errorAuth}</span>}
          </label>
          {/* <span>{error}</span> */}

          <button type="submit" disabled={submitting || pristine}>
            login
          </button>
        </form>
      )}
    />
  );
};

export default LoginForm;
