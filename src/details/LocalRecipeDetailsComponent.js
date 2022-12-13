/*eslint-disable*/
import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findRecipeByIdThunk } from "../recipe/recipe-thunks";
import RecipeInformation from "../recipeDetails/recipe-information/recipe-item";
import { findReviewsByRecipeThunk, createReviewThunk } from "../reviews/reviews-thunk";
import ReviewItem from "../recipeDetails/recipeReviews/review-items";
import RecipeSummary from "../recipeDetails/summary/summaryItem";
import IngredientItem from "../recipeDetails/ingredient-list/ingredient-item";

const style ={
    // 'border-radius': '50px',
    // 'background': '#573d3d',
    //  'box-shadow':  '20px 20px 60px #4a3434, -20px -20px 60px #644646'
    'borderRadius': '34px',
    'background': 'linear-gradient(315deg, #d0ffd0, #afe6af)',
    'boxShadow':  '-30px -30px 59px #8eba8e, 30px 30px 59px #f6fff6'

}


const LocalRecipeDetailsComponent = () => {
    const { rid } = useParams();
    const { localRecipe } = useSelector((state) => state.recipes)
    const [review, setReview] = useState('')
    const { reviews } = useSelector((state) => state.reviews)
    const { currentUser } = useSelector((state) => state.users)

    console.log(localRecipe)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findRecipeByIdThunk(rid))
        dispatch(findReviewsByRecipeThunk(rid))
    }, [rid])

    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            recipeID: rid,
            author: currentUser._id
        }))
    }

    return (
        <>
            <div className="m-lg-5 border border-secondary border-opacity-25" style={style}>

                <div className="row m-4">
                    {localRecipe && <RecipeInformation recipe={localRecipe} author={localRecipe.author} />}
                </div>
                {/*<div className="row m-4">*/}
                {/*    /!*ingredient list*!/*/}
                {/*    {localRecipe &&*/}
                {/*     localRecipe.ingredients.map(*/}
                {/*         ingredient => <IngredientItem key = {ingredient.id}/>*/}
                {/*     )*/}
                {/*    }*/}
                {/*</div>*/}
                {/*<div className="row m-4">*/}
                {/*    /!*recipeSummary*!/*/}
                {/*    {localRecipe && <RecipeSummary recipe={localRecipe}/>}*/}

                {/*</div>*/}
                <div className="row m-4">
                    {
                        currentUser &&
                        <div>
                            <textarea
                                onChange={(e) => setReview(e.target.value)}
                                className="form-control"></textarea>
                            <button onClick={handlePostReviewBtn}>Post Review</button>
                        </div>
                    }
                </div>
                <div className="row">

                    {reviews &&
                        reviews.map((eachReview) =>
                            <ReviewItem
                                key={eachReview._id}
                                reviews={eachReview} />
                        )
                    }
                </div>
            </div>

        </>

    );

}

export default LocalRecipeDetailsComponent;