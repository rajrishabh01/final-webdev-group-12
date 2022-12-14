import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createRecipesThunk} from "../recipe/recipe-thunks";
import './index.css';
import {Link} from "react-router-dom";

const CreateNewRecipeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
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
            disliked: false,
            rating: "0",
            cuisine: recipe.cuisine,
            category: recipe.category,
            summary: recipe.summary,
            author: uid,
            dateCreated: Date.now(),
            ingredients: recipe.ingredients,
            reviews: [],
            categories: categories,
            recipe_instructions: recipe.recipe_instructions,
            // recipe_image: recipe.recipe_image,
            recipe_image: '../images/default_recipe.jpg',
            cost_per_serving: recipe.cost_per_serving,
            calories: recipe.calories,
            preparation_time: recipe.preparation_time
        }
        dispatch(createRecipesThunk(newRecipe));
    }

    return (
        <div className="ps-4 pb-4 wd-create-bg align-content-center">
            <h3 className="pt-1 pb-2 text-success">Let's whip something up!</h3>

            <label htmlFor="recipeTitle" className="text-success"> Recipe Title</label>
            <input value={recipe.title} placeholder="Recipe Title"
                   id="recipeTitle"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, title: event.target.value})}
            />

            <label htmlFor="recipeSummary" className="text-success">Summary</label>
            <textarea value={recipe.summary} placeholder="Summary"
                      id="recipeSummary"
                      className="form-control w-25 mb-2"
                      onChange={(event) => setRecipe({...recipe, summary: event.target.value})}
            />

            <label htmlFor="recipeCuisine" className="text-success"> Cuisine</label>
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
                <label htmlFor="categories" className="text-success">Categories</label><br/>
                <input className="me-2" type="checkbox" name="category" value="Vegan"/>Vegan<br/>
                <input className="me-2" type="checkbox" name="category" value="Vegetarian"/>Vegetarian<br/>
                <input className="me-2" type="checkbox" name="category" value="GlutenFree"/>Gluten
                free<br/>
                <input className="me-2" type="checkbox" name="category" value="DairyFree"/>Dairy
                Free<br/>
                <input className="me-2" type="checkbox" name="category" value="VeryHealthy"/>Very
                healthy<br/>
                <input className="me-2" type="checkbox" name="category" value="Sustainable"/>Sustainable<br/>
            </div>

            <label htmlFor="ingredients" className="text-success">Ingredients</label>
            <textarea value={recipe.ingredients} placeholder="Ingredients"
                      id="ingredients"
                      className="form-control w-25 mb-2"
                      onChange={(event) => {
                          let ingredientStr;
                          ingredientStr = event.target.value;
                          let ingredientArray;
                          ingredientArray = ingredientStr.split(",");
                          setRecipe({...recipe, ingredients:ingredientArray})

                      }

                          }
            />

            <label htmlFor="recipeInstructions" className="text-success">Instructions</label>
            <textarea value={recipe.recipe_instructions} placeholder="Instructions"
                      id="recipeInstructions"
                      className="form-control w-25 mb-2"
                      onChange={(event) => setRecipe(
                          {...recipe, recipe_instructions: event.target.value})}
            />

            <label htmlFor="cost" className="text-success">Cost Per Serving ($)</label>
            <input value={recipe.cost_per_serving} placeholder="Cost Per Serving"
                   id="cost"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe(
                       {...recipe, cost_per_serving: event.target.value})}
            />

            <label htmlFor="calories" className="text-success">Calories (kCal)</label>
            <input value={recipe.calories} placeholder="Calories"
                   id="calories"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, calories: event.target.value})}
            />

            <label htmlFor="prepTime" className="text-success">Preparation Time (minutes)</label>
            <input value={recipe.preparation_time} placeholder="Preparation Time"
                   id="prepTime"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe(
                       {...recipe, preparation_time: event.target.value})}
            />

            <label htmlFor="image" className="text-success">Recipe Image</label>
            <input type="file" value={recipe.recipe_image} placeholder="Recipe Image"
                   id="image"
                   className="form-control w-25 mb-2"
                   onChange={(event) => setRecipe({...recipe, recipe_image: event.target.value})}
            />


            <Link to={`/home`}
                  className="link-success text-decoration-none">
                <button
                    className="rounded-pill btn btn-success mt-2 ps-3 pe-3 fw-bold"
                    onClick={createRecipeClickHandler}>
                    Create Recipe
                </button>
            </Link>

        </div>
    )
}

function getCheckedCategories(chkboxName) {
    let checkboxes = document.getElementsByName(chkboxName);
    let checkboxesChecked = [];
    // loop over them all
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push({category: checkboxes[i].value});
        }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

export default CreateNewRecipeComponent;