import React from "react";
import ReviewItem from "./review-items";
import reviewArray from "./reviews.json"

const RecipeReviewsComponent = () => {
    return(
        <>
            <div className="row">
                <h4>Reviews</h4>
                <ul className="list-group">
                    {
                        reviewArray.map(
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