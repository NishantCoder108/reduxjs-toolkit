import React, { useState } from "react";
import { createPost } from "./postSlice";
import { useDispatch } from "react-redux";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const addPost = (e) => {
    e.preventDefault();

    if (title && content) {
      dispatch(createPost(title, content, author));
      setTitle("");
      setContent("");
      setAuthor("");
    }
  };

  const canSave = title && content && author;

  return (
    <div
      style={{ border: "2px solid gray", padding: "21px", borderRadius: "9px" }}
    >
      <h4 style={{ textDecoration: "underline" }}> Add a New Post</h4>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <label htmlFor="title">Author</label>
        <input
          type="text"
          id="title"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <br />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          style={{ height: "65px" }}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <br />
        <br />

        <button onClick={addPost} disabled={!canSave}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
