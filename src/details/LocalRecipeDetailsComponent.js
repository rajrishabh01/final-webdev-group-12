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
    'background': 'linear-gradient(rgba(184, 231, 154, 0.9),rgba(255, 255, 255, 0.1)'

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
                                className="form-control w-25"></textarea>
                            <button className="btn btn-success rounded-pill mt-2" onClick={handlePostReviewBtn}>Post Review</button>
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