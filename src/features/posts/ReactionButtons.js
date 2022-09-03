import React from "react";
import { useDispatch } from "react-redux";
import { reactionPost } from "./postSlice";
const ReactionButtons = ({ post }) => {
  //  console.log(post);
  const dispatch = useDispatch();

  const reationEmoji = {
    like: "👍",
    wow: "😲",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };

  let buttonStyle = {
    background: "none",
    // width: "9px",
    color: "white",
    display: "inline",
    // border:'2px solid red',
    padding: 0,
    paddingRight: "6px",
  };

  return (
    <>
      {Object.entries(reationEmoji).map(([name, emoji]) => {
        // console.log(emoji, name);
        return (
          <button
            style={buttonStyle}
            onClick={() =>
              dispatch(
                reactionPost({
                  postId: post.id,
                  reaction: name,
                })
              )
            }
          >
            <span style={{ width: "30px" }}>
              {emoji}
              {post.reactions ? post.reactions[name] : ""}
            </span>
          </button>
        );
      })}
    </>
  );
};

export default ReactionButtons;
