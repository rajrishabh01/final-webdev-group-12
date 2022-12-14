/* eslint-disable */
import React from "react";
import SearchBar from "./search-bar"
import "./searchComponent.css"

const style ={
    'background': 'linear-gradient(rgba(184, 231, 154, 0.9),rgba(255, 255, 255, 0.1)'
}
const SearchComponent = () => {
    return(
        <div style={style}>
            <div className="row p-5">
                <div className="col-2">

                </div>
                <div className="col">
                    <SearchBar/>
                </div>
                <div className="col-2">

                </div>

            </div>
            <div className="rwo p-5 ">
                <h4 className="text-success m-lg-5">Recommendations: </h4>
                <div className="sc_card-wrap ">

                    <div className="sc_card-list">

                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3">
                                <button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                    window.location.href="/recipeDetails/1159884"
                                }}>Roasted Lamb with Honey-Thyme Glaze </button>
                            </div>
                            <img src="https://spoonacular.com/recipeImages/1159884-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/553781"
                            }}>Easy Slow Cooker Beef and Noodles</button></div>
                            <img src="https://spoonacular.com/recipeImages/553781-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "386635"
                            }}>Quick Sweet-and-Sour Chicken</button></div>
                            <img src="https://spoonacular.com/recipeImages/386635-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">

                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "197757"
                            }}>Dijon-Marmalade-Glazed Baked Ham</button></div>
                            <img src="https://spoonacular.com/recipeImages/197757-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "768050"
                            }}>Cheesy Cauliflower Puffs – Low Carb and Gluten-Free</button></div>
                            <img src="https://spoonacular.com/recipeImages/768050-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "76953"
                            }}>Spaghetti With Pecorino Romano And Black Pepper</button></div>
                            <img src="https://spoonacular.com/recipeImages/76953-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "386635"
                            }}>Quick Sweet-and-Sour Chicken</button></div>
                            <img src="https://spoonacular.com/recipeImages/386635-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">

                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "197757"
                            }}>Dijon-Marmalade-Glazed Baked Ham</button></div>
                            <img src="https://spoonacular.com/recipeImages/197757-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "1159884"
                            }}>Roasted Lamb with Honey-Thyme Glaze</button></div>
                            <img src="https://spoonacular.com/recipeImages/1159884-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "553781"
                            }}>Easy Slow Cooker Beef and Noodles</button></div>
                            <img src="https://spoonacular.com/recipeImages/553781-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "386635"
                            }}>Quick Sweet-and-Sour Chicken</button></div>
                            <img src="https://spoonacular.com/recipeImages/386635-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">

                            <div className="sc_tab_h3"><button className="btn btn-link
                                text-decoration-none  text-white " onClick={(e) =>{
                                window.location.href="/recipeDetails/" + "197757"
                            }}>Dijon-Marmalade-Glazed Baked Ham</button></div>
                            <img src="https://spoonacular.com/recipeImages/197757-312x231.jpg" alt=""/>

                        </div>

                    </div>
                </div>
            </div>



        </div>
    );

}

export default SearchComponent;