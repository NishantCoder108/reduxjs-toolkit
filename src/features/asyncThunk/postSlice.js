import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle", //idle  | loading | succeeded  | failed
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer

    createPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
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
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { createPost, reactionPost } = postSlice.actions;

export default postSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;

//createAsyncThunk will generate three Redux action creators using createAction : pending , fulfilled , and rejected . Each lifecycle action creator will be attached to the returned thunk action creator so that your reducer logic can reference the action types and respond to the actions when dispatched.





//The reducers property both creates an action creator function and responds to that action in the slice reducer. The extraReducers allows you to respond to an action in your slice reducer but does not create an action creator function. You will use reducers most of the time.




//createAsyncThunk accepts three parameters: a string action type value, a payloadCreator callback, and an options object.





//payloadCreator ::- A callback function that should return a promise containing the result of some asynchronous logic. It may also return a value synchronously. If there is an error, it should either return a rejected promise containing an Error instance or a plain value such as a descriptive error message or otherwise a resolved promise with a RejectWithValue argument as returned by the thunkAPI.rejectWithValue function.