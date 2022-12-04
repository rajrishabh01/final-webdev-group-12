import React from "react";
import RecipeInformation from "./recipe-item";

const RecipeComponent = () =>{
    return(
        <div className="row">
            <h4>Information</h4>
            <RecipeInformation/>
        </div>
    )
}
export default RecipeComponent;