/*eslint-disable*/
import React from "react";
import CreateRecipesComponent from "../recipe/create-recipe";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const { currentUser } = useSelector((state) => state.users);
    return (
        <div className="ms-3">
            {
                currentUser &&
                <h2>Welcome {currentUser.firstName}!</h2>
            }
            <CreateRecipesComponent/>
        </div>
    );
}

export default HomeComponent;