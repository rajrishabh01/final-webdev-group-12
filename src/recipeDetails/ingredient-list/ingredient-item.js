import React from "react";
const IngredientItem = (
    {
        eachIngredient = {
            "id": 1022009,
            "aisle": "Ethnic Foods",
            "image": "https://spoonacular.com/cdn/ingredients_100x100/chili-powder.jpg",
            "name": "ancho chile powder",
            "amount": 1.5,
            "unit": "teaspoons",
            "unitShort": "t",
            "unitLong": "teaspoons",
            "originalString": "1 1/2 teaspoons chipotle chile powder or ancho chile powder",
            "metaInformation": []
        }
    }
) => {
    return (
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col">
                    <li className = "list-group-item border border-0">
                    <span>
                        <img src={eachIngredient.image} className = "" width= "15%" alt={eachIngredient.image}/> <span className='fw-bolder'>
                        {eachIngredient.amount} {eachIngredient.unit} </span>
                        {eachIngredient.name}
                    </span>
                    </li>
                </div>
                <div className="col-2">

                </div>
            </div>



    );
};
export default IngredientItem;