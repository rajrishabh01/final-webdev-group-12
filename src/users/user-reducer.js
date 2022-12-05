import { createSlice } from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk,
    createUserThunk,
    updateUserThunk,
    deleteUserThunk
} from "./users-thunk";

//create temp data for users

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "aladdin.png",
};

const templateUser = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": true,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}


const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser(state, action) {
            const index = state.findIndex(user => user._id === action.payload);
            state.splice(index, 1);
        },
        createUser(state, action) {
            state.unshift({
                ...action.payload,
                ...templateUser,
                _id: (new Date()).getTime(),
            })
        }
    },
    //uncomment after integration
    extraReducers: {
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        [createUserThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.users.push(payload)
        },

        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            const userIndex = state.users.findIndex((u) => u._id === payload._id)
            state.users[userIndex] = {
                ...state.users[userIndex],
                ...payload
            }
        },
        [deleteUserThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.users = state.users.filter(u => u._id !== payload);
        }
    }
})


export const {createUser, deleteUser} = usersReducer.actions;
export default usersReducer.reducer