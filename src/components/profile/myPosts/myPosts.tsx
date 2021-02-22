import React from "react";
import { Form, Field } from "react-final-form";
import { PostType } from "../../../redux/profile-reduser";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

type PropsType = {
  myPosts: Array<PostType>;
  addNewPostOnClick: (text: string) => void;
};
type MyPostFormPropsType = {
  onSubmit: (value: string) => void;
};

let MyPostForm: React.FC<MyPostFormPropsType> = (props) => {
  return (
    <Form
      onSubmit={(value) => props.onSubmit(value.newPostText)}
      initialValues={{ newPostText: "" }}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field name="newPostText" component="textarea" />
          <button disabled={submitting || pristine}>Send</button>
        </form>
      )}
    />
  );
};

let MyPosts: React.FC<PropsType> = React.memo((props) => {
  let addNewPostOnClick = (value: string) => {
    props.addNewPostOnClick(value);
  };
  return (
    <div className={s.posts}>
      <div className={s.posts__form}>
        <MyPostForm onSubmit={addNewPostOnClick} />
      </div>
      <div className={s.posts__items}>
        {props.myPosts.map((el) => (
          <Post key={el.id} state={el} />
        ))}
      </div>
    </div>
  );
});
export default MyPosts;
