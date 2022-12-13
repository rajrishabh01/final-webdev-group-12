/* eslint-disable */

import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {findRecipeInformationByRecipeIDThunk} from "../rapidAPI/rapidAPI-thunks";

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
    let [searchTerm, setSearchTerm] = useState('')
    //const {recipe, loading} = useSelector((state)=>state.rapidRecipeInfo)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(findRecipeInformationByRecipeIDThunk(searchTerm))
    },[])
    return(
        <div className="list-group-item m-3">
            <div className="card text-center" style={{width: 315}}>
                <div className="card-img" style={{width: 288}}>
                    <img src={result.image} alt={result.image}/>
                </div>
                <div className="card-body">
                    <div className = "row">
                        <h1 className="card-title text-success">
                            <button className="btn btn-link btn-lg text-decoration-none text-center font-monospace " onClick={(e) =>{
                                let recipeID = result.id
                                window.location.href="/recipeDetails/" + recipeID
                                setSearchTerm(recipeID)
                                dispatch(findRecipeInformationByRecipeIDThunk(searchTerm.trim()))
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
                        <a>How many your ingredients?
                        <span className="fw-bolder text-info"> {result.usedIngredientCount}</span>
                        </a>
                    </div>
                    <div className="row">
                        <a>
                        How many missed ingredients?
                        <span className="fw-bolder text-info"> {result.missedIngredientCount} </span>
                        </a>

                    </div>
                </div>
            </div>



        </div>
    )
};
export default ResultItem;
