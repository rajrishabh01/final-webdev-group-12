/* eslint-disable */
import React, {useEffect} from "react";
import ResultItem from "./search-result";
import {useDispatch, useSelector} from "react-redux";
import {findRecipesByIngredientsThunk} from "../rapidAPI/rapidAPI-thunks";
import "../index.css"
const style ={
    'background': 'linear-gradient(rgba(184, 231, 154, 0.9),rgba(255, 255, 255, 0.1)'
}


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
            <div style={style}>
                <div className="row">
                    <div className="row">
                        <a className="m-4 display-4 text-center text-success text-decoration-none">
                            There are some related recipes for you
                        </a>

                    </div>
                    <div className="col-1">

                    </div>
                    <div className = "col-11">
                        <div>
                            <div className = "m-5 row ">
                                <ul className="list-group list-group-horizontal">
                                    <div className="row row-cols-auto">
                                        {
                                            resultList.map(
                                                (result,index) => <ResultItem key = {result.id}
                                                                              result = {result}/>
                                            )
                                        }
                                    </div>

                                    {/*<ResultItem/>*/}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className = "">

                    </div>


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