/* eslint-disable */
import React, {useEffect} from "react";
import ResultItem from "./search-result";
import axios from "axios";


const ResultListComponent = () =>{
    let [responseData, setResponseData] = React.useState([])
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
    let url = window.location.href;
    let arr = url.split("/");
    let ingredients = arr[arr.length - 1];
    options.params.ingredients = ingredients
    useEffect(()=> {
           getResult();
    },[])


    //console.log(responseData)
    const getResult = () =>{
            axios.request(options).then(function (response) {
                // console.log("response.data");
                // console.log(response.data);
                // console.log(response.data);

                setResponseData(response.data)

            }).catch(function (error) {
                console.error(error);
                console.log(error.message)
            });


    }
    if(responseData.length>0){
        return(
            <div>
                <div className="row">
                    <h1 className="m-4 text-lg-center font-monospace text-success">
                        There are some related recipes for you
                    </h1>

                </div>

                <div className = "m-5 row">
                    <ul className="list-group">
                        {
                            responseData.map(
                                (result,index) => <ResultItem key = {result.id}
                                                              result = {result}/>
                            )
                        }


                        <ResultItem/>

                    </ul>

                </div>
            </div>
        )
    }
    else{
        return (
            <>
                <div className="col-8">
                    Loading...
                </div>
            </>
        )
    }



}
export default ResultListComponent;