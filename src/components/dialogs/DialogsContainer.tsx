import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  addNewMessageTextActionCreator,
  DialogType,
  MessageType
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";
import { GlobalStateType } from "../../redux/redux-store";

export type DialogMapDispatchToPropsType = {
  addMessageOnClick: () => void
  onChangeMassage: (text: string) => void
}

export type DialogMapStateToPropsType = {
  dialogData: DialogType[]
  messageData: MessageType[]
  newMessageText: string
}

function mapStateToProps(state: GlobalStateType): DialogMapStateToPropsType {
  return {
    dialogData: state.dialogPage.dialogData,
    messageData: state.dialogPage.messageData,
    newMessageText: state.dialogPage.newMessageText
  };
}

function mapDispatchToProps(dispatch: any): DialogMapDispatchToPropsType {
  return {
    addMessageOnClick: () => dispatch(addMessageActionCreator()),
    onChangeMassage: (text) => dispatch(addNewMessageTextActionCreator(text))
  };
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// const DialogsContainer = connect<DialogMapStateToPropsType, DialogMapDispatchToPropsType, {}, GlobalStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
