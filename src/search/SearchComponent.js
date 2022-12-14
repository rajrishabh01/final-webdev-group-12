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
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/1159884" className="text-decoration-none text-white">Roasted Lamb with Honey-Thyme Glaze</a></div>
                            <img src="https://spoonacular.com/recipeImages/1159884-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/553781" className="text-decoration-none text-white">Easy Slow Cooker Beef and Noodles</a></div>
                            <img src="https://spoonacular.com/recipeImages/553781-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/386635" className="text-decoration-none text-white">Quick Sweet-and-Sour Chicken</a></div>
                            <img src="https://spoonacular.com/recipeImages/386635-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">

                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/197757" className="text-decoration-none text-white">Dijon-Marmalade-Glazed Baked Ham</a></div>
                            <img src="https://spoonacular.com/recipeImages/197757-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/1159884" className="text-decoration-none text-white">Roasted Lamb with Honey-Thyme Glaze</a></div>
                            <img src="https://spoonacular.com/recipeImages/1159884-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/553781" className="text-decoration-none text-white">Easy Slow Cooker Beef and Noodles</a></div>
                            <img src="https://spoonacular.com/recipeImages/553781-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/386635" className="text-decoration-none text-white">Quick Sweet-and-Sour Chicken</a></div>
                            <img src="https://spoonacular.com/recipeImages/386635-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">

                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/197757" className="text-decoration-none text-white">Dijon-Marmalade-Glazed Baked Ham</a></div>
                            <img src="https://spoonacular.com/recipeImages/197757-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/1159884" className="text-decoration-none text-white">Roasted Lamb with Honey-Thyme Glaze</a></div>
                            <img src="https://spoonacular.com/recipeImages/1159884-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/553781" className="text-decoration-none text-white">Easy Slow Cooker Beef and Noodles</a></div>
                            <img src="https://spoonacular.com/recipeImages/553781-312x231.jpg" alt=""/>

                        </div>
                        <div className="sc_card-item" id="sc_card-item">
                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/386635" className="text-decoration-none text-white">Quick Sweet-and-Sour Chicken</a></div>
                            <img src="https://spoonacular.com/recipeImages/386635-312x231.jpg" alt=""/>

                        </div>

                        <div className="sc_card-item" id="sc_card-item">

                            <div className="sc_tab_h3"><a href="http://localhost:3000/recipeDetails/197757" className="text-decoration-none text-white">Dijon-Marmalade-Glazed Baked Ham</a></div>
                            <img src="https://spoonacular.com/recipeImages/197757-312x231.jpg" alt=""/>

                        </div>

                    </div>
                </div>
            </div>



        </div>
    );

}

export default SearchComponent;