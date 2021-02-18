import { connect } from "react-redux";
import {
  addNewMyPost,
  PostType
} from "../../../redux/profile-reduser";
import { GlobalStateType } from "../../../redux/redux-store";
import MyPosts from "./myPosts";

// export default function MyPostsContainer(props) {
//   let state = props.store.getState();
//   let myPosts = state.profilePage.myPosts;
//   let newPostText = state.profilePage.newPostText;

//   let addTextToPost = (text) => {
//     props.store.dispatch(addNewPostTextAction(text));
//   };
//   let addPost = () => {
//     props.store.dispatch(addNewMyPost());
//   };

//   return (
//     <MyPosts
//       myPosts={myPosts}
//       newPostText={newPostText}
//       onChangeText={addTextToPost}
//       addNewPostOnClick={addPost}
//     />
//   );
// }
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
