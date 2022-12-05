import {createAsyncThunk} from "@reduxjs/toolkit";
import {userLikesRecipe} from "./likes-service";

export const userLikesRecipeThunk = createAsyncThunk(
    'userLikesRecipe',
    async (like) => {
        return await userLikesRecipe(like.uid, like.recipeID)
    }
)