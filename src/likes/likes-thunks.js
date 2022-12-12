import {createAsyncThunk} from "@reduxjs/toolkit";
import {userLikesRecipe, findRecipesLikedByUser} from "./likes-service";

export const userLikesRecipeThunk = createAsyncThunk(
    'userLikesRecipe',
    async (like) => {
        return await userLikesRecipe(like.uid, like.rid)
    }
)

export const findRecipesLikedByUserThunk = createAsyncThunk(
    'findRecipesLikedByUser',
    async (uid) => {
        return await findRecipesLikedByUser(uid)
    }
)
