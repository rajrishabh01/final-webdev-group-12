import React from "react";
import IngredientItem from "./ingredient-item";
import recipe from '../recipe.json'

const ingredientArray = recipe.extendedIngredients;
console.log(ingredientArray)
const ingredientList = () => {
    return(

        <div>
            <h4>ingredient</h4>

            <ul className="list-group list-group-horizontal">
                <div className="row row-cols-2">
                    {
                        ingredientArray.map(
                            ingredient =>
                                <IngredientItem
                                    key = {ingredient.id}
                                    eachIngredient={ingredient}/>
                        )
                    }
                </div>


            </ul>


        </div>

    );
}

export default ingredientList();