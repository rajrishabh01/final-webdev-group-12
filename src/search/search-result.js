import React from "react"

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
    return(
        <div>
            <div className="list-group-item m-3">
                <div className="row">
                    <div className="col">
                        <img src={result.image} width="100%" alt={result.image}/>
                    </div>
                    <div className="col">
                        <div className = "row">
                            <h1 className="text-success fw-semibold">
                                <button className="btn btn-link btn-lg text-decoration-none text-lg-center" onClick={(e) =>{
                                    let recipeID = result.id
                                    window.location.href="/recipeDetails/" + recipeID
                                    //findRecipeDetails(result.id)
                                    // console.log(result.id);
                                }}>{result.title} </button>
                            </h1>
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
