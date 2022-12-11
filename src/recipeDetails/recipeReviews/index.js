/*eslint-disable*/
import React from "react";
import ReviewItem from "./review-items";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findReviewsByRecipeThunk, createReviewThunk } from "../../reviews/reviews-thunk";

const RecipeReviewsComponent = () => {
    let url = window.location.href;
    let arr = url.split("/")
    let recipeID = arr[arr.length-1]
    const [review, setReview] = useState('')
    const { reviews } = useSelector((state) => state.reviews)
    const { currentUser } = useSelector((state) => state.users)

    console.log(currentUser)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsByRecipeThunk(recipeID))
    }, [recipeID])

    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            recipeID: recipeID,
            author: currentUser._id,
            isApiCreated:true
        }))
    }


    return(
        <>
            <div className="row">
                <h4>Reviews</h4>
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
                <ul className="list-group">
                    {
                        reviews.map(
                            reviews =>
                                <ReviewItem
                            key = {reviews.id}
                            reviews={reviews}/>
                        )
                    }
                </ul>
            </div>
        </>
    );
}

export default RecipeReviewsComponent;