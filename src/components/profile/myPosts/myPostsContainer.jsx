import { connect } from "react-redux";
import {
  addNewMyPost,
  addNewPostTextAction
} from "../../../redux/profile-reduser";
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

function mapStateToProps(state) {
  return {
    myPosts: state.profilePage.myPosts,
    newPostText: state.profilePage.newPostText
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addNewPostOnClick: () => dispatch(addNewMyPost()),
    onChangeText: (text) => dispatch(addNewPostTextAction(text))
  };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
