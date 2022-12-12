/*eslint-disable*/
import axios from "axios";
const RECIPE_API_URL = 'http://localhost:4000/api/recipes'

export const createRecipe = async (newRecipe) => {
    const response = await axios.post(RECIPE_API_URL, newRecipe)
    const actualRecipe = response.data
    return actualRecipe
}
export const findAllRecipes = async () => {
    const response = await axios.get(RECIPE_API_URL)
    const recipes = response.data
    return recipes
}
export const updateRecipe = async () => {}
export const deleteRecipe = async (recipeID) => {
    const response = await axios.delete(`${RECIPE_API_URL}/${recipeID}`)
    const status = response.data
    return recipeID;
}

export const findRecipeById = async (rid) => {
    const response = await axios.get(`${RECIPE_API_URL}/${rid}`)
    return response.data
}

export const findRecipesByUserId = async (uid) => {
    const response = await axios.get(`${RECIPE_API_URL}/${uid}/user`)
    return response.data
}