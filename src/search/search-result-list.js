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
    let pageId = arr[arr.length - 1];
    options.params.ingredients = pageId;

    useEffect(()=> {
        getResult();
    },[])



    const getResult = () =>{
            axios.request(options).then(function (response) {
                console.log("response.data");
                console.log(response.data);
                // console.log(response.data[0]);

                setResponseData(response.data)
                console.log("responseData")

                console.log(responseData)

            }).catch(function (error) {
                // setMessage(error)
                console.error(error);
                console.log(error.message)
            });


        console.log("responseData")

        console.log(responseData)

    }
    if(responseData.length>0){
        return(
            <div className = "row">
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
        )
    }
    else{
        return (
            <>
                <h1>
                    404
                </h1>
            </>
        )
    }



}
export default ResultListComponent;