/*eslint-disable*/
import React from "react";
import CreateRecipesComponent from "../recipe/create-recipe";
import {useSelector} from "react-redux";
import './index.css';

const HomeComponent = () => {
    const { currentUser } = useSelector((state) => state.users);
    return (
        <div className="ps-3 wd-home-bg">
            {
                currentUser &&
                <h2>Welcome {currentUser.firstName}!</h2>
            }
            <CreateRecipesComponent/>
        </div>
    );
}

export default HomeComponent;