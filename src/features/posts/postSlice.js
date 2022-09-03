import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit ",
    content: "I have heard good thigs",
    date: new Date("Thu Sep 01 2018 11:22:55 GMT+0530").toISOString(),
    reactions: {
      like: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Slices... ",
    content: "The more I say slice , the more I want pizza",
    date: new Date("Thu Dec 01 2021 11:22:55 GMT+0530").toISOString(),
    reactions: {
      like: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            author,
            reactions: {
              like: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },

    reactionPost: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { createPost, reactionPost } = postSlice.actions;

export default postSlice.reducer;

export const selectAllPosts = (state) => state.posts;




//createAsyncThunk will generate three Redux action creators using createAction : pending , fulfilled , and rejected . Each lifecycle action creator will be attached to the returned thunk action creator so that your reducer logic can reference the action types and respond to the actions when dispatched.