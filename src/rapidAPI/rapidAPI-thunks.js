import {createAsyncThunk} from "@reduxjs/toolkit";
import {findRecipeInformationByRecipeID, findRecipesByIngredients} from "./rapidAPI-service";

export const findRecipesByIngredientsThunk = createAsyncThunk(
    'findRecipesByIngredients',
    (term) => findRecipesByIngredients(term)
)

export const findRecipeInformationByRecipeIDThunk = createAsyncThunk(
    'findRecipeInformationByRecipeID',
    (recipeID)=>findRecipeInformationByRecipeID(recipeID)
)