import React from "react";
import { Link } from "react-router-dom";


const ReviewItem = ({reviews}) => {
    return(
        <>
        { reviews &&
        <div>
            <div className="list-group-item border border-1">
                <div className="row">
                    <div className="col-1">
                        <img src={reviews.avatar} className="rounded-circle" width="100%" height="70px" alt={reviews.avatar}/>
                    </div>
                    <div className = "col-11">
                        <div>
                        <Link key={reviews.author._id} to={`/profile/${reviews.author._id}`} className="list-group-item">
                            {reviews.author.username}
                        </Link>
                        </div>
                        <div className="fw-bolder">
                            {reviews.review}
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    }
    </>
    );
}
export default ReviewItem;
