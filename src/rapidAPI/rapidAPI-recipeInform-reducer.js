import {createSlice} from "@reduxjs/toolkit";
import {findRecipeInformationByRecipeIDThunk} from "./rapidAPI-thunks";

const initialState = {
    recipe:[],
    loading:false
}

const rapidAPIRecipeInfoReducer = createSlice({
    name:'rapidAPIRecipeInfo',
    initialState,
    extraReducers:{
        [findRecipeInformationByRecipeIDThunk.fulfilled]:(state,action) => {
            console.log(action.payload)
            state.recipe = action.payload
        }
    },
    reducers:{

    }
                                              })
export default rapidAPIRecipeInfoReducer.reducer