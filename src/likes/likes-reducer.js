import {createSlice} from "@reduxjs/toolkit";
import {userLikesRecipeThunk, findRecipesLikedByUserThunk} from "./likes-thunks";

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
        },
        [findRecipesLikedByUserThunk.fulfilled]: (state, action) => {
            state.likes = action.payload
        }
    }
})

export default likesReducer.reducer