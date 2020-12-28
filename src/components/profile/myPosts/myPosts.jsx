import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  let updateText = React.createRef();

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
