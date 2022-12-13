import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createRecipesThunk} from "../recipe/recipe-thunks";

const CreateNewRecipeComponent = () => {
    const { currentUser } = useSelector((state) => state.users);
    const uid = currentUser && currentUser._id;
    let [recipe, setRecipe] = useState({title: ''});
    const dispatch = useDispatch();
    const createRecipeClickHandler = () => {
        const categories = getCheckedCategories("category");
        const newRecipe = {
            title: recipe.title,
            likes: 0,
            liked: false,
            isApiCreated: false,
            dislikes: 0,
            rating: "0",
            cuisine: recipe.cuisine,
            category: recipe.category,
            summary: recipe.summary,
            author: uid,
            dateCreated: Date.now(),
            ingredients: [],
            reviews:[],
            categories: categories,
            recipe_instructions: recipe.recipe_instructions,
            recipe_image: recipe.recipe_image,
            cost_per_serving: recipe.cost_per_serving,
            calories: recipe.calories,
            preparation_time: recipe.preparation_time
        }
        dispatch(createRecipesThunk(newRecipe));
    }
    return (
        <div className="ps-3">
            <h4 className="pt-1 pb-2">Create your very own Recipe!</h4>

            <label htmlFor="recipeTitle"> Recipe Title</label>
            <input value={recipe.title} placeholder="Recipe Title"
                   id="recipeTitle"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, title: event.target.value})}
            />

            <label htmlFor="recipeSummary">Summary</label>
            <textarea value={recipe.summary} placeholder="Summary"
                   id="recipeSummary"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, summary: event.target.value})}
            />

            <label htmlFor="recipeCuisine"> Cuisine</label>
            <select value={recipe.cuisine} placeholder="Cuisine"
                   id="recipeCuisine"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, cuisine: event.target.value})}>
                <option value="MEXICAN">Mexican</option>
                <option value="CHINESE">Chinese</option>
                <option value="AMERICAN">American</option>
                <option value="INDIAN">Indian</option>
                <option value="THAI">Thai</option>
                <option value="FRENCH">French</option>
            </select>

            <div className='mb-2'>
                <label htmlFor="categories">Categories</label><br/>
                <input type="checkbox" name="category" value="Vegan"/>Vegan<br/>
                <input type="checkbox" name="category" value="Vegetarian"/>Vegetarian<br/>
                <input type="checkbox" name="category" value="GlutenFree"/>Gluten free<br/>
                <input type="checkbox" name="category" value="DairyFree"/>Dairy Free<br/>
                <input type="checkbox" name="category" value="VeryHealthy"/>Very healthy<br/>
                <input type="checkbox" name="category" value="Sustainable"/>Sustainable<br/>
            </div>

            <label htmlFor="ingredients">Ingredients</label>
            <textarea value={recipe.ingredients} placeholder="Ingredients"
                      id="ingredients"
                      className="form-control w-25 mb-2"
                      onChange={(event) => setRecipe({...recipe, ingredients: event.target.value})}
            />

            <label htmlFor="recipeInstructions">Instructions</label>
            <textarea value={recipe.recipe_instructions} placeholder="Instructions"
                      id="recipeInstructions"
                      className="form-control w-25 mb-2"
                      onChange={(event) => setRecipe({...recipe, recipe_instructions: event.target.value})}
            />

            <label htmlFor="cost">Cost Per Serving ($)</label>
            <input value={recipe.cost_per_serving} placeholder="Cost Per Serving"
                      id="cost"
                      className="form-control w-25 mb-2"
                      onChange={(event) => setRecipe({...recipe, cost_per_serving: event.target.value})}
            />

            <label htmlFor="calories">Calories (kCal)</label>
            <input value={recipe.calories} placeholder="Calories"
                   id="calories"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, calories: event.target.value})}
            />

            <label htmlFor="prepTime">Preparation Time (minutes)</label>
            <input value={recipe.preparation_time} placeholder="Preparation Time"
                   id="prepTime"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, preparation_time: event.target.value})}
            />

            <label htmlFor="image">Recipe Image</label>
            <input type="file" value={recipe.recipe_image} placeholder="Recipe Image"
                   id="image"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, recipe_image: event.target.value})}
            />


            <button
                className="rounded-pill btn btn-primary mt-2 ps-3 pe-3 fw-bold"
                onClick={createRecipeClickHandler}>
                Create Recipe
            </button>
        </div>
    )
}

function getCheckedCategories(chkboxName) {
    let checkboxes = document.getElementsByName(chkboxName);
    let checkboxesChecked = [];
    // loop over them all
    for (let i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push({category: checkboxes[i].value});
        }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

export default CreateNewRecipeComponent;