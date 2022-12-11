/*eslint-disable*/
import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findRecipeByIdThunk } from "../recipe/recipe-thunks";
import RecipeInformation from "../recipeDetails/recipe-information/recipe-item";
import { findReviewsByRecipeThunk, createReviewThunk } from "../reviews/reviews-thunk";
import ReviewItem from "../recipeDetails/recipeReviews/review-items";

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
            <div className="row">
                {localRecipe && <RecipeInformation recipe={localRecipe} author={localRecipe.author} />}

            </div>

            <div className="row">
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
        </>

    );

}

export default LocalRecipeDetailsComponent;