import React from "react";
import s from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import { MessageType, DialogType } from "../../redux/dialog-reducer";
import { Field, Form } from "react-final-form";


type PropsType = {
  dialogData: Array<DialogType>
  messageData: Array<MessageType>
  newMessageText: string
  addMessageOnClick: (message: string) => void
}

type DialogFormPropsType = {
  onSubmit: (message: string) => void
}

let DialogsForm: React.FC<DialogFormPropsType> = (props) => {
  return (
    <Form
      onSubmit={(values) => props.onSubmit(values.messageText)}
      initialValues={{ messgeText: "" }}
      render={({ handleSubmit, pristine, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field component="textarea" name="messageText" />
          <button disabled={submitting || pristine}>Отправить</button>
        </form>
      )}
    />
  )
}

let Dialogs: React.FC<PropsType> = (props) => {
  let dialogEl = props.dialogData.map((el) => {
    return <Dialog key={el.name} name={el.name} id={el.id} img={el.img} />;
  });
  let messageEl = props.messageData.map((el) => {
    return <Message key={el.text} text={el.text} id={el.id} />;
  });

  let addMessageOnClick = (messageText: string) => {
    props.addMessageOnClick(messageText);
  };

  return (
    <div className={s.dialog}>
      <div className={s.dialog__items}>{dialogEl}</div>
      <div className={s.dialog__messages}>
        <div>{messageEl}</div>
        <div className={s.dialog__add}>
          <DialogsForm onSubmit={addMessageOnClick} />
        </div>
      </div>
    </div>
  );
}

export default Dialogs