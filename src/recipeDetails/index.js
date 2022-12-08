import React from "react";
import RecipeSummaryComponent from "./summary";
import RecipeReviewsComponent from "./recipeReviews";
import RecipeComponent from "./recipe-information";
import IngredientList from "./ingredient-list";

const style ={
    // 'border-radius': '50px',
    // 'background': '#573d3d',
    //  'box-shadow':  '20px 20px 60px #4a3434, -20px -20px 60px #644646'
    'borderRadius': '34px',
    'background': 'linear-gradient(315deg, #d0ffd0, #afe6af)',
    'boxShadow':  '-30px -30px 59px #8eba8e, 30px 30px 59px #f6fff6'

}

const RecipeDetailsComponent = () => {
    return(
        <div className="m-lg-5 border border-secondary border-opacity-25" style={style}>
            <div className="row">
                <h1>Recipe Details</h1>
            </div>
            <div className="row m-4">
                <RecipeComponent/>
            </div><br/>
            <div className = "row m-4" >
                <IngredientList/>
            </div><br/>
            <div className="row m-4">
                <RecipeSummaryComponent/>
            </div><br/>
            <div className="row m-4">
                <RecipeReviewsComponent/>
            </div>

        </div>
    );
}

export default RecipeDetailsComponent;