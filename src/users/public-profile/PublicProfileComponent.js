/*eslint-disable*/
import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findFollowersThunk, findFollowingThunk, followUserThunk } from "../../follows/follows-thunks";
import { findUserByIdThunk } from "../users-thunk";
import { findReviewsByAuthorThunk } from "../../reviews/reviews-thunk";
import { findRecipeByUserIdThunk } from "../../recipe/recipe-thunks";
import regularPic from '../../pics/regular.png'
import proPic from '../../pics/procreator.png'
import { findRecipesLikedByUserThunk } from "../../likes/likes-thunks";

const PublicProfileComponent = () => {
    const { uid } = useParams()
    const { publicProfile } = useSelector((state) => state.users)
    const { reviews } = useSelector((state) => state.reviews)
    const { followers, following } = useSelector((state) => state.follows)
    const { currentUser } = useSelector((state) => state.users)
    const { recipes } = useSelector((state) => state.recipes)
    const { likes } = useSelector((state) => state.likes)


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
        dispatch(findRecipeByUserIdThunk(uid))
        dispatch(findRecipesLikedByUserThunk(uid))
    }, [uid, followers])

    const userPic = publicProfile && publicProfile.type === 'REGULAR' ? regularPic : proPic;

    return (
        <>
            <div className="wd-container-profile">
                <div className="col-4">
                    <div className="row">
                        <h1>Public Profile</h1>
                        {
                            followers && currentUser && !followers.find((user) => user._id !== currentUser._id) &&
                            <button
                                onClick={() => { handleFollowBtn() }}
                                className="btn btn-success float-end">
                                Follow
                            </button>
                        }
                        <h1>{publicProfile && publicProfile.username}</h1>
                        <div>
                            <img src={userPic} className="w-1" />
                        </div>
                    </div>
                </div>
                <h2>Liked Recipes</h2>
                <div className="list-group">
                    {
                        likes && likes.map((like) =>
                            like && like.recipe && like.recipe.title &&
                            <Link key={like.recipe._id} to={`/details/${like.recipe._id}`} className="list-group-item">
                                {like.recipe.title}
                            </Link>

                        )
                    }
                </div>
                <h2>Reviews By User</h2>
                <div className="list-group">
                    {<ul>
                        {
                            reviews && reviews.map((review) =>
                                <div>
                                    {
                                        !review.isApiCreated &&
                                        <Link to={`/details/${review.recipeID}`} className="list-group-item">
                                            {review.review} {review.recipeID}
                                        </Link>
                                    }
                                    {
                                        review.isApiCreated &&
                                        <Link to={`/recipeDetails/${review.recipeID}`} className="list-group-item">
                                            {review.review} {review.recipeID}
                                        </Link>
                                    }
                                </div>
                            )
                        }
                    </ul>}
                </div>
                <h2>Recipes By User</h2>
                <div className="list-group">
                    {
                        recipes && recipes.map((recipe) =>
                            <Link key={recipe._id} to={`/details/${recipe._id}`} className="list-group-item">
                                {recipe.title}
                            </Link>
                        )
                    }
                </div>

                <h2>Following</h2>
                <div className="list-group">
                    {
                        following && following.map((follow) =>
                            <Link key={follow._id} to={`/profile/${follow.followed._id}`} className="list-group-item">
                                {follow.followed.username}
                            </Link>
                        )
                    }
                </div>
                <h2>Followers</h2>
                <div className="list-group">
                    {
                        followers && followers.map((follow) =>
                            <Link key={follow._id} to={`/profile/${follow.follower._id}`} className="list-group-item">
                                {follow.follower.username}
                            </Link>
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default PublicProfileComponent;