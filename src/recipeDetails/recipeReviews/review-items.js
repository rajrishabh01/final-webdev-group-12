import React from "react";
import { Link } from "react-router-dom";
import regularPic from "../../pics/regular.png"
import proPic from '../../pics/procreator.png'


const ReviewItem = ({reviews}) => {
    let authorAvatoar=''
    let authorType =''
    if(reviews.author.type != null){
         authorAvatoar = reviews.author.type ==='REGULAR'? proPic : regularPic;
         authorType = reviews.author.type === ' REGULAR'? 'casual creator' : 'pro creator'
    }

    return(
        <>
        { reviews &&
        <div>
            <div className="list-group-item border border-1 border-success">
                <div className="row">
                    <div className="col-1">
                        <img src={authorAvatoar} className="rounded-circle" width="100%" height="70px" alt='Avatoar'/>
                    </div>
                    <div className = "col-11">
                        <div className="row">
                        <Link key={reviews.author._id} to={`/profile/${reviews.author._id}`} className="list-group-item border border-0">
                            <span className="h5 text-success fw-normal">{reviews.author.username}   </span> <span className="text-secondary text-decoration-none">-{authorType}</span>
                        </Link>
                        </div>
                        <div className="row fw-bolder">
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
