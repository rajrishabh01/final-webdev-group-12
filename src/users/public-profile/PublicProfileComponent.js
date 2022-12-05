/*eslint-disable*/
import React from "react";
import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "../../follows/follows-thunks";
import { findUserByIdThunk } from "../users-thunk";
import { findReviewsByAuthorThunk } from "../../reviews/reviews-thunk";

const PublicProfileComponent= () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    const {reviews} = useSelector((state) => state.reviews)
    const {followers, following} = useSelector((state) => state.follows)
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
        dispatch(followUserThunk({
            followed: uid
        }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    }, [uid])
    return(
        <>
            <button
                onClick={handleFollowBtn}
                className="btn btn-success float-end">
                Follow
            </button>
            <h1>{publicProfile && publicProfile.username}</h1>
            <ul>
                {
                    reviews && reviews.map((review) =>
                    <li>
                        <Link to={`/details/${review.imdbID}`}>
                        {review.review} {review.imdbID}
                        </Link>
                    </li>
                    )
                }
            </ul>
            <h2>Following</h2>
            <div className="list-group">
                {
                    following && following.map((follow) =>
                        <Link to={`/profile/${follow.followed._id}`} className="list-group-item">
                            {follow.followed.username}
                        </Link>
                    )
                }
            </div>
            <h2>Followers</h2>
            <div className="list-group">
                {
                    followers && followers.map((follow) =>
                        <Link to={`/profile/${follow.follower._id}`} className="list-group-item">
                            {follow.follower.username}
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default PublicProfileComponent;