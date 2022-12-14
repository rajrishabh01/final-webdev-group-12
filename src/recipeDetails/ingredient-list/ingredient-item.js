import React from "react";
let imageUrl = "https://spoonacular.com/cdn/ingredients_100x100/"
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
    let showImage;
    let name;
    let amount;
    let unit;
    //console.log(typeof(eachIngredient.image))
    if(typeof eachIngredient === "string"){
        showImage = imageUrl + eachIngredient + ".jpg"
        name = eachIngredient

    }
    if(typeof eachIngredient === "object"){
        if(typeof eachIngredient.image === "string"){
            if (eachIngredient.image.length<30) {
                showImage = imageUrl + eachIngredient.image
            }
        }
        else{
            showImage = eachIngredient.image
        }
        name = eachIngredient.name
        amount = eachIngredient.amount
        unit = eachIngredient.unit
    }



    //console.log(eachIngredient.image.length)
    return (
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col">
                    <li className = "list-group-item border border-0 bg-transparent">
                    <span>
                        <img src={showImage} className = "" width= "15%" alt={showImage}/> <span className='fw-bolder'>
                        {amount} {unit} </span>
                        {name}
                    </span>
                    </li>
                </div>
                <div className="col-2">

                </div>
            </div>



    );
};
export default IngredientItem;