
/*eslint-disable*/
import React from "react";
import CreateRecipesComponent from "../recipe/create-recipe";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    //const {currentUser} = useSelector((state) => state.users)


    return(
        <>

                <h1>Home</h1>
                <CreateRecipesComponent /> 
        </>
    );
}

export default HomeComponent;