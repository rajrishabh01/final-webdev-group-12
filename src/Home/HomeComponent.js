import React from "react";
import CreateRecipesComponent from "../recipe/create-recipe";
import BeforeLogin from "./home-before-login";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users)


    return(
        <>

                <h1>Home</h1>
                { !currentUser && <BeforeLogin/>}
                { currentUser &&<CreateRecipesComponent /> }
        </>
    );
}

export default HomeComponent;