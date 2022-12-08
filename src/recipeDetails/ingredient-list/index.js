/* eslint-disable */
import React, {useEffect, useState} from "react";
import IngredientItem from "./ingredient-item";
import axios from "axios";

// const ingredientArray = recipe.extendedIngredients;
const IngredientList = () => {
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

    console.log(chosenRecipe)
    console.log(chosenRecipe)
    console.log(Object.keys(chosenRecipe).length)
    if(Object.keys(chosenRecipe).length >0){
        return(

            <div>
                <h4>ingredient</h4>

                <ul className="list-group list-group-horizontal">
                    <div className="row row-cols-2">
                        {

                            chosenRecipe.extendedIngredients.map(
                                ingredient =>
                                    <IngredientItem
                                        key = {ingredient.id}
                                        eachIngredient={ingredient}/>
                            )
                        }
                    </div>


                </ul>


            </div>

        );
    }







}

export default IngredientList;