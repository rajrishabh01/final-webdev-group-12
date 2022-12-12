import axios from "axios";

const USERS_URL = 'http://localhost:4000/api/users'
//const LIKES_URL = 'http://localhost:4000/users/:uid/likes/:mid'

export const userLikesRecipe = async (uid, recipeID) => {
    const response = await axios.post(`${USERS_URL}/${uid}/likes/${recipeID}`)
    return response.data
}

export const findRecipesLikedByUser = async (uid) => {
    const response = await axios.get(`${USERS_URL}/${uid}/likes`)
    return response.data
}