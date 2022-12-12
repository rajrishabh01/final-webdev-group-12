import {createSlice} from "@reduxjs/toolkit";
import { createRecipesThunk, findAllRecipesThunk, deleteRecipeThunk, findRecipeByIdThunk, findRecipeByUserIdThunk} from "./recipe-thunks";
const initialState = {
    recipes: [],
    loading: true
}

const recipesReducer = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: {
        [findAllRecipesThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload
        },
        [createRecipesThunk.fulfilled]: (state, action) => {
            state.recipes.push(action.payload)
        },
        [deleteRecipeThunk.fulfilled]: (state, action) => {
            // const midx = state.findIndex(m => m._id === action.payload)
            state.recipes = state.recipes.filter(r => {
                return r._id !== action.payload
            })
        },
        [findRecipeByIdThunk.fulfilled]: (state, action) => {
            state.localRecipe = action.payload
        },
        [findRecipeByUserIdThunk.fulfilled]: (state, action) => {
            state.recipes = action.payload
        }
    }
})

export default recipesReducer.reducer;