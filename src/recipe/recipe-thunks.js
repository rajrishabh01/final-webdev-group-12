import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllRecipes, createRecipe, deleteRecipe} from "./recipe-service";

export const createRecipesThunk = createAsyncThunk(
    'createRecipe',
    (newRecipe) => createRecipe(newRecipe)
)

export const findAllRecipesThunk = createAsyncThunk(
    'findAllRecipes',
    () => findAllRecipes()
)

export const updateRecipeThunk = {}
export const deleteRecipeThunk = createAsyncThunk(
    'deleteRecipe',
    (recipeID) => deleteRecipe(recipeID)
)