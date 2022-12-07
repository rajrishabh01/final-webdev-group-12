
import React from "react"
import axios from "axios";

const ResultItem = (
    {
        result = {
            "id":641803,
            "title":"Easy & Delish! ~ Apple Crumble",
            "image":"https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
            "usedIngredientCount":3,
            "missedIngredientCount":4,
            "likes":1
        }
    }
) =>{
    let [recipe, setRecipe] = React.useState('')
    function findRecipeDetails(id) {
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + id + '/information',
            headers: {
                'X-RapidAPI-Key': '64849db56fmsh6cd884599048293p191134jsnd38a6b32761e',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setRecipe(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        
    }

    return(
        <div>
            <div className="list-group-item m-3">
                <div className="row">
                    <div className="col">
                        <img src={result.image} width="100%" alt={result.image}/>
                    </div>
                    <div className="col">
                        <div className = "row">
                            <h2 className="text-success fw-semibold">
                                <a href = "/recipeDetails" className="text-decoration-none" onClick={(e) =>{
                                    findRecipeDetails(result.id)
                                    // console.log(result.id);
                                }}>{result.title} </a>
                            </h2>
                        </div>
                        <div className = "row">
                            <h6>
                                {result.likes} likes
                                <i className="bi bi-fire text-danger"></i>
                            </h6>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                            <h5 className="fw-semibold">
                                How many your ingredients?
                                <span className="fw-bolder text-info"> {result.usedIngredientCount}</span>
                            </h5>
                        </div>
                        <div className="row">
                            <h5 className="fw-semibold">
                                How many missed ingredients?
                                <span className="fw-bolder text-info"> {result.missedIngredientCount} </span>
                            </h5>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
};
export default ResultItem;
