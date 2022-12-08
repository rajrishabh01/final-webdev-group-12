import React from "react";
const RecipeInformation = (
    {
        recipe = {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 21,
            "gaps": "no",
            "lowFodmap": false,
            "ketogenic": false,
            "whole30": false,
            "servings": 10,
            "sourceUrl": "http://www.epicurious.com/recipes/food/views/Char-Grilled-Beef-Tenderloin-with-Three-Herb-Chimichurri-235342",
            "spoonacularSourceUrl": "https://spoonacular.com/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992",
            "aggregateLikes": 0,
            "creditText": "Epicurious",
            "sourceName": "Epicurious",
            "_id": 156992,
            "title": "Char-Grilled Beef Tenderloin with Three-Herb Chimichurri",
            "readyInMinutes": 45,
            "image": "https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg",
            "imageType": "jpg",
            "instructions": "PreparationFor spice rub: Combine all ingredients in small bowl. Do ahead: Can be made 2 days ahead. Store airtight at room temperature. For chimichurri sauce: Combine first 8 ingredients in blender; blend until almost smooth. Add 1/4 of parsley, 1/4 of cilantro, and 1/4 of mint; blend until incorporated. Add remaining herbs in 3 more additions, pureeing until almost smooth after each addition. Do ahead: Can be made 3 hours ahead. Cover; chill. For beef tenderloin: Let beef stand at room temperature 1 hour. Prepare barbecue (high heat). Pat beef dry with paper towels; brush with oil. Sprinkle all over with spice rub, using all of mixture (coating will be thick). Place beef on grill; sear 2 minutes on each side. Reduce heat to medium-high. Grill uncovered until instant-read thermometer inserted into thickest part of beef registers 130F for medium-rare, moving beef to cooler part of grill as needed to prevent burning, and turning occasionally, about 40 minutes. Transfer to platter; cover loosely with foil and let rest 15 minutes. Thinly slice beef crosswise. Serve with chimichurri sauce. *Available at specialty foods stores and from tienda.com."
        }
    }

) =>{
    return(

        <div className="row">
            <div className="col-4">
                <img src={recipe.image} width="100%" className="rounded-5" alt={recipe.image}/>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-8">
                        <span>
                            <a href = {recipe.sourceUrl} className="link-info text-decoration-none" >
                                <span>Source: {recipe.sourceName}</span></a>
                        </span>
                    </div>

                    <div className = "col">
                        <button className = "btn btn-info rounded-pill">
                            <i className="bi bi-bookmark-check"></i>
                            Save
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light rounded-pill">
                            <i className="bi bi-share"></i>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <h1 className="fw-bold">
                            {recipe.title}
                        </h1>
                    </div>

                </div>
                <div className="row">
                    <h6 className="text-secondary">
                        preparing time: {recipe.readyInMinutes} mins
                    </h6>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                       <h6 className="text-success fw-bold">
                           vegetarian: <i className={recipe.vegetarian? `bi bi-emoji-smile`: `bi bi-emoji-frown`}
                                          style = {recipe.vegetarian? {color:"red"} : {color:"gray"}
                                          }></i>
                       </h6>
                    </div>
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            vegan: <i className={recipe.vegan? `bi bi-emoji-smile`: `bi bi-emoji-frown`}
                                           style = {recipe.vegan? {color:"red"} : {color:"gray"}
                                           }></i>
                        </h6>
                    </div>
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            gluten free: <i className={recipe.glutenFree? `bi bi-emoji-smile`: `bi bi-emoji-frown`}
                                           style = {recipe.glutenFree? {color:"red"} : {color:"gray"}
                                           }></i>
                        </h6>
                    </div>
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            very healthy: <i className={recipe.veryHealthy? `bi bi-emoji-smile`: `bi bi-emoji-frown`}
                                           style = {recipe.veryHealthy? {color:"red"} : {color:"gray"}
                                           }></i>
                        </h6>
                    </div>
                    <div className="col">
                        <h6 className="text-success fw-bold">
                            very popular: <i className={recipe.veryPopular? `bi bi-emoji-smile`: `bi bi-emoji-frown`}
                                           style = {recipe.veryPopular? {color:"red"} : {color:"gray"}
                                           }></i>
                        </h6>
                    </div>
                </div>
                <br/>
                <div className = "row">
                    <div className="col-9">
                        <textarea className="form-control rounded-4" placeholder="Share more about your experience. Any tips for improving this recipe?"
                        ></textarea>
                    </div>
                    <div className="col">
                        <button className="btn btn-success rounded-pill"><i
                            className="bi bi-plus-circle"></i> </button>
                    </div>
                </div>

            </div>

        </div>
    )
};
export default RecipeInformation;