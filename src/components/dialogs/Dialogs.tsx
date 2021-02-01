import React from "react";
import s from "./dialogs.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import { MessageType, DialogType } from "../../redux/dialog-reducer";


type PropsType = {
  dialogData: Array<DialogType>
  messageData: Array<MessageType>
  newMessageText: string

  addMessageOnClick: () => void
  onChangeMassage: (text: string) => void
}

let Dialogs: React.FC<PropsType> = (props) => {
  let dialogEl = props.dialogData.map((el) => {
    return <Dialog key={el.name} name={el.name} id={el.id} img={el.img} />;
  });
  let messageEl = props.messageData.map((el) => {
    return <Message key={el.text} text={el.text} id={el.id} />;
  });

  let messageText: React.RefObject<HTMLTextAreaElement> = React.createRef();

  let addMessageOnClick = () => {
    props.addMessageOnClick();
  };
  let onChangeMassage = () => {
    let textToAdd = messageText.current?.value
    if (textToAdd) {
      props.onChangeMassage(textToAdd);
    }
    // props.addNewMassageText(textToAdd);
  };
  return (
    <div className={s.dialog}>
      <div className={s.dialog__items}>{dialogEl}</div>
      <div className={s.dialog__messages}>
        <div>{messageEl}</div>
        <div className={s.dialog__add}>
          <textarea
            ref={messageText}
            cols={20}
            rows={5}
            value={props.newMessageText}
            onChange={onChangeMassage}
          />
          <button onClick={addMessageOnClick}>Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs