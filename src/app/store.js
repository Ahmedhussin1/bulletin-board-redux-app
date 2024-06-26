import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/posts/postSlice'
import usersSlice from "../features/users/usersSlice";
export const store = configureStore({
    reducer:{
        posts: postReducer,
        users: usersSlice
    }
})

