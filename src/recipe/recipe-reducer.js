import {createSlice} from "@reduxjs/toolkit";
import { createRecipesThunk, findAllRecipesThunk, deleteRecipe} from "./recipe-thunks";
const initialState = {
    recipes: [],
    loading: true
}

const recipesReducer = createSlice({
    name: 'recipes',
    initialState: initialState,
    extraReducers: {
        [findAllRecipesThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload
        },
        [createRecipesThunk.fulfilled]: (state, action) => {
            state.recipes.push(action.payload)
        },
        [deleteRecipe.fulfilled]: (state, action) => {
            // const midx = state.findIndex(m => m._id === action.payload)
            state.recipes = state.recipes.filter(r => {
                return r._id !== action.payload
            })
        }
    }
})

export default recipesReducer.reducer;