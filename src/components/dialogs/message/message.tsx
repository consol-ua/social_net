import React from "react";
import s from "./../dialogs.module.css";
import { Route } from "react-router-dom";
type PropsType = {
  id: number
  text: string
}
let Message: React.FC<PropsType> = (props) => {
  return (
    <Route
      path={`/dialog/${props.id}`}
      render={() => <div className={s.dialog__message}>{props.text}</div>}
    />
  );
}
export default Message