import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  addNewMessageTextActionCreator
} from "./../../redux/dialog-reducer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dialogData: state.dialogPage.dialogData,
    messageData: state.dialogPage.messageData,
    newMessageText: state.dialogPage.newMessageText
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addMessageOnClick: () => dispatch(addMessageActionCreator()),
    onChangeMassage: (text) => dispatch(addNewMessageTextActionCreator(text))
  };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
