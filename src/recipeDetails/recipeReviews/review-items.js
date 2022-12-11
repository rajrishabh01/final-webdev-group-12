import React from "react";

const ReviewItem = (
    {
        reviews = {
            "id": 123,
            "username": "Elsa",
            "avatar": "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=681&h=383&crop=1&resize=681%2C383",
            "content": "A great summer meal. I bought grilled chicken breasts from the market’s pre-cooked section which made the meal prep even quicker!",
            "likes": 298,

        }
    }
) => {
    return(
        <div>
            <div className="list-group-item border border-1">
                <div className="row">
                    <div className="col-1">
                        <img src={reviews.avatar} className="rounded-circle" width="100%" height="70px" alt={reviews.avatar}/>
                    </div>
                    <div className = "col-11">
                        <div>
                            <h6>
                                {reviews.username}
                            </h6>

                        </div>
                        <div className="fw-bolder">
                            {reviews.review}
                        </div>
                        <br/>
                        <div>
                            {reviews.likes} likes
                        </div>
                        <div>
                            {/*TODO: likes++ reducer*/}
                            <i className="bi bi-chat-square-heart" onClick={(e) =>{
                                reviews.likes++
                            }}></i>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default ReviewItem;
