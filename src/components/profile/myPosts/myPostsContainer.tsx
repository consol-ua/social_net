import { connect } from "react-redux";
import {
  addNewMyPost,
  PostType
} from "../../../redux/profile-reduser";
import { GlobalStateType } from "../../../redux/redux-store";
import MyPosts from "./myPosts";

type MapStateToPropsType = {
  myPosts: Array<PostType>
}
type MapDispatchToPropsType = {
  addNewPostOnClick: (text: string) => void
}
function mapStateToProps(state: GlobalStateType): MapStateToPropsType {
  return {
    myPosts: state.profilePage.myPosts
  };
}
function mapDispatchToProps(dispatch: any): MapDispatchToPropsType {
  return {
    addNewPostOnClick: (text) => dispatch(addNewMyPost(text)),
  };
}

const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, GlobalStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
