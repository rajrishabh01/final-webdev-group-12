import {createSlice} from "@reduxjs/toolkit";
import {userLikesRecipeThunk} from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}

export const likesReducer = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [userLikesRecipeThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload)
        }
    }
})

export default likesReducer.reducer