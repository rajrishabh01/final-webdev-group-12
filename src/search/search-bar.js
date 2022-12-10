import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findRecipesByIngredientsThunk} from "../rapidAPI/rapidAPI-thunks";
// import ResultItem from "./search-result";

const SearchBar = () => {
    //let [responseData, setResponseData] = React.useState('')
    let [searchTerm,setSearchTerm] = useState('apples,flour,sugar')
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(findRecipesByIngredientsThunk(searchTerm))
    },[])

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

                    <input id="search-input" type="search" className="form-control border border-success" placeholder="search recipe"
                    onChange={(e) => {setSearchTerm(e.target.value)}} value ={searchTerm}/>
                    <label className="form-label form-floating text-secondary" htmlFor="search-input" >
                        Search recipe by ingredients
                    </label>
                </div>
                <button id="search-button" type="button" className="btn btn-primary"
                        onClick = {(e) => {
                            if(searchTerm.length > 0 ){
                                window.location.href="/result/" + searchTerm
                            }
                            dispatch(findRecipesByIngredientsThunk(searchTerm.trim()))
                            }
                        }>
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </div>




    );
}
export default SearchBar;

