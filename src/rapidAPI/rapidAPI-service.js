import axios from "axios"

const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
    params: {
        ingredients: 'apples,flour,sugar',
        number: '10',
        ignorePantry: 'true',
        ranking: '1'
    },
    headers: {
        'X-RapidAPI-Key': '64849db56fmsh6cd884599048293p191134jsnd38a6b32761e',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};

export const findRecipesByIngredients = async(term) =>{
    options.params.ingredients = term
    const response = await axios.request(options)
          //.then(function (response) {
        //console.log(response.data)
    return response.data;
    // }).catch(function (error) {
    //     // setMessage(error)
    //     console.error(error);
    //     console.log(error.message)
    // });

    //return response.data
}

const recipesOptions = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/47910/information',
    headers: {
        'X-RapidAPI-Key': '64849db56fmsh6cd884599048293p191134jsnd38a6b32761e',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};

export const findRecipeInformationByRecipeID = async (recipeID) =>{
    recipesOptions.url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + recipeID + '/information'
    const result = await axios.request(options)
        //.then(function (response) {
        //console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });
    return result.data;

}