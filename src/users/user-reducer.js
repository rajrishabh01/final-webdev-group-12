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


const usersReducer = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        users: [],
        currentUser: null,
        error: null
    },
    reducers: {
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
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
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