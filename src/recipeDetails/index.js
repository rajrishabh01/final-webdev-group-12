import React from "react";
import RecipeSummaryComponent from "./summary";
import RecipeReviewsComponent from "./recipeReviews";
import RecipeComponent from "./recipe-information";
import IngredientList from "./ingredient-list";
import { useSelector } from "react-redux";

const style ={
    'background': 'linear-gradient(rgba(184, 231, 154, 0.9),rgba(255, 255, 255, 0.1)'
}

const RecipeDetailsComponent = () => {
    const { currentUser } = useSelector((state) => state.users)
    console.log(currentUser)
    return(
        <div className="m-lg-5 border border-secondary border-opacity-25" style={style}>
            <div className="m-5">
                <div className="row">
                    <h1 className="text-white">Recipe Details</h1>
                </div>
                <div className="m-4">
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
            </div>

        </div>
    );
}

export default RecipeDetailsComponent;