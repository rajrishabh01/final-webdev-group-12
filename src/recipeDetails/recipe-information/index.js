import React, {useEffect, useState} from "react";
import RecipeInformation from "./recipe-item";
import axios from "axios";

const RecipeComponent = () =>{
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
    useEffect(()=>{
        getRecipe();
    },[])

    const getRecipe = ()=> {
        axios.request(options).then(function (response) {
            setChosenRecipe(response.data)
            //console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }


    return(
        <div className="row">
            <h4>Information</h4>
            <RecipeInformation recipe={chosenRecipe}/>
        </div>
    )
}
export default RecipeComponent;