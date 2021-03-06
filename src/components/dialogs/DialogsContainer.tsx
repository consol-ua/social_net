import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  DialogType,
  MessageType
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";
import { GlobalStateType } from "../../redux/redux-store";
import { compose } from "redux";
import { WithAuthRedirect } from "../../Hoc/WithAuthRedirect";

export type DialogMapDispatchToPropsType = {
  addMessageOnClick: (message: string) => void
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
    addMessageOnClick: (message) => dispatch(addMessageActionCreator(message)),
  };
}

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect)(Dialogs);
export default DialogsContainer;
