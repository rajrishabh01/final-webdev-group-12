import React from "react";
import recipe from '../recipe.json'
import RecipeSummary from "./summaryItem";
import IngredientItem from "../ingredient-list/ingredient-item";

const recipeSummary = recipe.instructions;

const RecipeSummaryComponent = () => {
    return(
        <>
            <div className="row">
                <h4>Instructions</h4>
                <div>
                    {
                        <RecipeSummary key = {recipe.id} recipe={recipe}/>
                    }

                </div>

            </div>
        </>
    );
}

export default RecipeSummaryComponent();