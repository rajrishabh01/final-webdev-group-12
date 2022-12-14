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
import adminPic from '../../pics/admin.png'

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

    let userPic;
    let userType;
    if (publicProfile && publicProfile.type !== 'ADMIN') {
        userPic = publicProfile && publicProfile.type === 'REGULAR' ? regularPic : proPic;
        userType = publicProfile && publicProfile.type === 'REGULAR' ? 'Casual Creator' : 'Pro Creator'
    } else if ((publicProfile && publicProfile.type === 'ADMIN')) {
        userPic = adminPic
        userType = 'Administrator'
    }

    return (
        <>

            <div className="wd-container-profile pt-2">
                <div className="row wd-user-row mt-4">
                    <div className="col-4 ms-2 wd-pic-section pb-2">
                        {
                            currentUser && publicProfile &&
                            <div className="col-7 d-inline">
                                <div className="d-flex wd-name-follow mt-3 fw-bolder">{publicProfile.firstName} {publicProfile.lastName}
                                {
                                    followers && currentUser && !followers.find((user) => user._id !== currentUser._id) &&
                                    <button
                                        onClick={() => { handleFollowBtn() }}
                                        className="btn btn-success wd-follow rounded-pill">
                                        Follow
                                    </button>
                                }
                                </div>
                                <div className="wd-image mt-2">
                                    <img src={userPic} className="rounded-circle" />
                                </div>
                                <span className="d-flex justify-content-center fw-bold text-success mb-5"> {userType} </span>
                                <div className="wd-userinfo mb-2 ms-2">
                                    <div className="text-secondary">Username : <span className="text-success">{publicProfile.username}</span> </div>
                                    <div className="text-secondary">Handle : <span className="text-success">{publicProfile.handle}</span> </div>
                                    <div className="text-secondary">About me : <span className="text-success">{publicProfile.bio}</span> </div>

                                </div>

                                
                            </div>
                        }

                    </div>
                    <div className="col-6 ms-2 wd-related pb-4 ">
                        <div className="list-group">
                            <h2>Recipes By User </h2>

                            {
                                recipes && recipes.map((recipe) =>
                                    <Link key={recipe._id} to={`/details/${recipe._id}`} className="list-group-item">
                                        {recipe.title}
                                    </Link>
                                )
                            }
                        </div>

                        {<div className="list-group">
                            <h2>Reviews </h2>
                            {
                                reviews && reviews.map((review) =>
                                    <div>
                                        {
                                            !review.isApiCreated &&
                                            <Link to={`/details/${review.recipeID}`} className="list-group-item">
                                                "{review.review}"
                                            </Link>
                                        }
                                        {
                                            review.isApiCreated &&
                                            <Link to={`/recipeDetails/${review.recipeID}`} className="list-group-item">
                                                "{review.review}"
                                            </Link>
                                        }
                                    </div>
                                )
                            }
                        </div>}

                        <div className="list-group">
                            <h2>Liked Recipes</h2>
                            {
                                likes && likes.map((like) =>
                                    like && like.recipe && like.recipe.title &&
                                    <Link key={like.recipe._id} to={`/details/${like.recipe._id}`} className="list-group-item">
                                        {like.recipe.title}
                                    </Link>

                                )
                            }
                        </div>


                        <div className="list-group">
                            <h2>Following {following && following.length}</h2>
                            {
                                following && following.map((follow) =>
                                    <Link key={follow._id} to={`/profile/${follow.followed._id}`} className="list-group-item">
                                        {follow.followed.firstName} {follow.followed.lastName} - <span className="text-secondary">@{follow.followed.username}</span>                                    </Link>
                                )
                            }
                        </div>

                        <div className="list-group">
                            <h2>Followers {followers && followers.length}</h2>
                            {
                                followers && followers.map((follow) =>
                                    <Link key={follow._id} to={`/profile/${follow.follower._id}`} className="list-group-item">
                                        {follow.follower.firstName} {follow.follower.lastName} - <span className="text-secondary">@{follow.follower.username}</span>
                                    </Link>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicProfileComponent;