import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // used to send actions to the store then it get processed by reducers
import { nanoid } from "@reduxjs/toolkit"; // library to generate unique id
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const onTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const onAuthorChange = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId) // prepared callback function will handle the logic
      );
      setTitle("");
      setContent("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add new Post</h2>
      <form>
        <label> Post Title </label>
        <input type="text" value={title} onChange={onTitleChange} />

        <label>Author:</label>
        <select value={userId} onChange={onAuthorChange}>
            <option value=""></option>
            {userOptions}
        </select>

        <label>Post Content</label>
        <textarea type="text" value={content} onChange={onContentChange} />

        <button onClick={onSavePostClicked} type="button">
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
