import React from "react";
import { PostType } from "../../../redux/profile-reduser";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  myPosts: Array<PostType>
  newPostText: string
  onChangeText: (text: string) => void
  addNewPostOnClick: () => void
}

let MyPosts: React.FC<PropsType> = (props) => {
  let updateText: any = React.createRef();

  let postList = props.myPosts.map((el) => <Post key={el.id} state={el} />);

  let onChangeText = () => {
    props.onChangeText(updateText.current.value);
    // props.dispatch(addNewPostTextAction(updateText.current.value));
  };
  let addNewPostOnClick = () => {
    props.addNewPostOnClick();
    // props.dispatch(addNewMyPost());
  };

  return (
    <div className={s.posts}>
      <div className={s.posts__form}>
        <textarea
          ref={updateText}
          value={props.newPostText}
          onChange={onChangeText}
        />
        <button onClick={addNewPostOnClick}>Send</button>
      </div>
      <div className={s.posts__items}>{postList}</div>
    </div>
  );
}
export default MyPosts