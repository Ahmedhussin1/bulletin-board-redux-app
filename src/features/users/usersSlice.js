import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:'0',
        name:'ahmed'
    },
    {
        id:'1',
        name:'alice'
    },
    {
        id:'2',
        name:'jake'
    }
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer