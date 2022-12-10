import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./recipe-service";

export const createRecipesThunk = createAsyncThunk(
    'createRecipe',
    (newRecipe) => service.createRecipe(newRecipe)
)

export const findAllRecipesThunk = createAsyncThunk(
    'findAllRecipes',
    () => service.findAllRecipes()
)

export const updateRecipeThunk = {}
export const deleteRecipeThunk = createAsyncThunk(
    'deleteRecipe',
    (recipeID) => service.deleteRecipe(recipeID)
)

export const findRecipeById = createAsyncThunk(
    'findRecipeById',
    (rid) => service.findRecipeById(rid)
)