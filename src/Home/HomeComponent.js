/*eslint-disable*/
import React from "react";
import CreateRecipesComponent from "../recipe/create-recipe";
import {useSelector} from "react-redux";
import './index.css';
import './home-footer.css';
import HomeFooterComponent from "./home-footer";

const HomeComponent = () => {
    const {currentUser} = useSelector((state) => state.users);
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Caveat&family=Noto+Sans+JP&display=swap"
                rel="stylesheet"/>
            <div className="ps-3 wd-home-bg">
                <div className="pb-3">
                    {
                        currentUser &&
                        <h2 className="wd-welcome-msg">Welcome {currentUser.firstName} !</h2>
                    }
                    {
                        !currentUser &&
                        <h2 className="wd-welcome-msg">Welcome !</h2>
                    }
                </div>
                <CreateRecipesComponent/>
            </div>
            <HomeFooterComponent/>
        </>
    );
}

export default HomeComponent;