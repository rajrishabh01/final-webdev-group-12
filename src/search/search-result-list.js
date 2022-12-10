/* eslint-disable */
import React, {useEffect} from "react";
import ResultItem from "./search-result";
import {useDispatch, useSelector} from "react-redux";
import {findRecipesByIngredientsThunk} from "../rapidAPI/rapidAPI-thunks";


const ResultListComponent = () =>{
    const {resultList, loading} = useSelector((state) => state.rapid)
    const dispatch = useDispatch()


    let url = window.location.href;
    let arr = url.split("/");
    let ingredients = arr[arr.length - 1];
    useEffect(()=>{
        dispatch(findRecipesByIngredientsThunk(ingredients))
    },[])
    // console.log("resultList")
    // console.log(resultList)
    if(resultList.length>0){
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
                            resultList.map(
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