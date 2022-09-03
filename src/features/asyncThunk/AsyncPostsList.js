import React from "react";
import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import { selectAllPosts } from "./postSlice";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // console.log("posts", posts);

  const renderPosts = posts.map((post) => (
    
    <article
      key={post.id}
      style={{
        border: "2px solid gray",
        borderRadius: "9px",
        padding: "30px",
        width: "250px",
        height: "160px",
      }}
    >
      <h3>{post.title}</h3>
      {/* <span style={{ display: "flex", justifyContent: "space-between" }}> */}
        <p>by {post.author ? post.author : "Unknown Author"}
       <TimeAgo timestamp= {post.date}/></p>
      {/* </span> */}
      <p>{post.content.substring(0, 30)}...</p>
       <ReactionButtons post={post}/> 
    </article>
  ))

  return (
    <section
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "30px",
        
      }}
    >
      {" "}
      <CreatePost />
      <h1 style={{ textAlign: "justify" }}>PostsList</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "19px",
        }}
      >
        {renderPosts}
      </div>
    </section>
  );
};

export default PostsList;
