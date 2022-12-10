/* eslint-disable */
import {createSlice} from "@reduxjs/toolkit";
//import {findRecipesByIngredients} from "./rapidAPI-service";
import {
    findRecipeInformationByRecipeIDThunk,
    findRecipesByIngredientsThunk
} from "./rapidAPI-thunks";
//import {findRecipeInformationByRecipeID} from "./rapidAPI-service";
//import {findRecipeInformationByRecipeIDThunk} from "./rapidAPI-thunks";

const initialState = {
    resultList:[],
    //recipe:[],
    loading:false
}

const rapidAPIReducer = createSlice({
    name:'rapidAPI',
    initialState,
    extraReducers:{
        [findRecipesByIngredientsThunk.fulfilled]:(state,action) => {
            console.log(action.payload)
            state.resultList = action.payload
        },
        // [findRecipeInformationByRecipeIDThunk.fulfilled]:(state,action) => {
        //     console.log(action.payload)
        //     state.recipe = action.payload
        // }
    },
    reducers:{
        getRecipesList(state,action){
                return state
        }
    }
                                    })
export const {getRecipesList} = rapidAPIReducer.actions
export default rapidAPIReducer.reducer