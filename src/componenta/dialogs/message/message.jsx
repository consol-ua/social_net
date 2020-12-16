import React from "react";
import s from "./../dialogs.module.css";
import { Route } from "react-router-dom";

export default function Message(props) {
  // <Route path={`/${props.id}`} component={Message} />;
  // props => (<div className={s.dialog__message}>{props.text}</div>;)
  return (
    <Route
      path={`/dialog/${props.id}`}
      render={() => <div className={s.dialog__message}>{props.text}</div>}
    />
  );
}
