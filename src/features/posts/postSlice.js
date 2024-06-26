import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "i've heard good things.",
  },
  {
    id: "2",
    title: "Slices",
    content: "The more I say slice, the more I want pizza",
  },
];

// action
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: { //post added now have reducer and a prepared callback 
      reducer(state, action) {
        state.push(action.payload); // push new post data into the state by using push and payload that will take the form data ---- push here is not mutating the state
      },
      prepare(title,content,userId){
        return{
          payload:{
            id:nanoid(),
            title,
            content,
            userId
          }
        }
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
