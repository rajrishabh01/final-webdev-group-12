import React from "react";
import ingredientList from "./ingredient-list";
import RecipeSummaryComponent from "./summary";
import RecipeReviewsComponent from "./recipeReviews";
import RecipeInformation from "./recipe-information/recipe-item";
import RecipeComponent from "./recipe-information";


const RecipeDetailsComponent = () => {
    return(
        <div className="m-lg-5 border border-secondary border-opacity-25">
            <div className="row">
                <h1>Recipe Details</h1>
            </div>
            <div className="row m-4">
                <RecipeComponent/>
            </div><br/>
            <div className = "row m-4" >
                {ingredientList}
            </div><br/>
            <div className="row m-4">
                {RecipeSummaryComponent}
            </div><br/>
            <div className="row m-4">
                <RecipeReviewsComponent/>
            </div>

        </div>
    );
}

export default RecipeDetailsComponent;