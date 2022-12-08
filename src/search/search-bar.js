import React from "react";
import axios from "axios";
import ResultItem from "./search-result"

const SearchBar = () => {
    let [responseData, setResponseData] = React.useState('')
    // let [message, setMessage] = React.useState('')
    const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
        params: {
            ingredients: 'apples,flour,sugar',
            number: '10',
            ignorePantry: 'true',
            ranking: '1'
        },
        headers: {
            'X-RapidAPI-Key': '64849db56fmsh6cd884599048293p191134jsnd38a6b32761e',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };


    return (
        <div className="row">
            <h3 className="text-center" >
                It's time for cooking! What do you have in the fridge?
            </h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="input-group">
                <div className="form-floating">

                    <input id="search-input" type="search" className="form-control border border-success" placeholder="search recipe"/>
                    <label className="form-label form-floating text-secondary" htmlFor="search-input" >
                        Search recipe by ingredients
                    </label>
                </div>
                <button id="search-button" type="button" className="btn btn-primary"
                        onClick = {(e) => {
                            const searchInput = document.getElementById('search-input');
                            const inputValue = searchInput.value;
                            options.params.ingredients = inputValue;
                            axios.request(options).then(function (response) {
                                // console.log("response.data");
                                 console.log(response.data);
                                // console.log(response.data[0]);
                                setResponseData(response.data)
                            }).catch(function (error) {
                                // setMessage(error)
                                console.error(error);
                                console.log(error.message)
                            });
                            }
                        }>
                    <i className="bi bi-search"></i>
                </button>
            </div>
            <div className="row">
                <ul className = "list-group ">
                    {
                        responseData.length === 0 ? '':responseData.map(
                            (result,index) => <ResultItem key = {result.id}
                                                          result = {result}/>
                        )

                    }

                </ul>
            </div>
        </div>




    );
}
export default SearchBar;

