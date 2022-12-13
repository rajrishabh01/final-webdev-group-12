/* eslint-disable */
import React, {useEffect, useState} from "react";
//import recipe from '../recipe.json'
import RecipeSummary from "./summaryItem";
import axios from "axios";

const RecipeSummaryComponent = () => {
    let[chosenRecipe, setChosenRecipe] = useState('');
    let url = window.location.href;
    let arr = url.split("/")
    let pageId = arr[arr.length-1]
    const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' + pageId + '/information',
        headers: {
            'X-RapidAPI-Key': '64849db56fmsh6cd884599048293p191134jsnd38a6b32761e',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };
    const getRecipe = ()=> {
        axios.request(options).then(function (response) {
            setChosenRecipe(response.data)
            //console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(()=>{
        getRecipe();
    },[])

    if(Object.keys(chosenRecipe).length >0) {

        return (
            <>
                <div className="row">
                    <h5 className="text-success">Instructions</h5>
                    <div>
                        {
                            <RecipeSummary key={chosenRecipe.id} recipe={chosenRecipe}/>
                        }

                    </div>

                </div>
            </>
        );
    }
}

export default RecipeSummaryComponent;