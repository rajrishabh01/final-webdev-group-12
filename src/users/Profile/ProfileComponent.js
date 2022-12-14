/*eslint-disable*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../users-thunk";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { findFollowersThunk, findFollowingThunk } from "../../follows/follows-thunks";
import { findReviewsByAuthorThunk } from "../../reviews/reviews-thunk";
import { findRecipeByUserIdThunk } from "../../recipe/recipe-thunks";
import regularPic from '../../pics/regular.png'
import proPic from '../../pics/procreator.png'
import adminPic from '../../pics/admin.png'
import { findAllUsersThunk } from "../users-thunk";
import { findRecipesLikedByUserThunk } from "../../likes/likes-thunks";
import "./index.css"

const ProfileComponent = () => {
    const navigate = useNavigate()
    const { currentUser } = useSelector((state) => state.users)
    const { followers, following } = useSelector((state) => state.follows)
    const uid = currentUser._id;
    const { reviews } = useSelector((state) => state.reviews)
    const { recipes } = useSelector((state) => state.recipes)
    const { likes } = useSelector((state) => state.likes)

    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    useEffect(() => {
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
        dispatch(findRecipeByUserIdThunk(uid))
        dispatch(findAllUsersThunk())
        dispatch(findRecipesLikedByUserThunk(uid))
    }, [currentUser])

    let userPic;
    let userType;
    if (currentUser && currentUser.type !== 'ADMIN') {
        userPic = currentUser && currentUser.type === 'REGULAR' ? regularPic : proPic;
        userType = currentUser && currentUser.type === 'REGULAR' ? 'Casual Creator' : 'Pro Creator'
    } else if ((currentUser && currentUser.type === 'ADMIN')) {
        userPic = adminPic
        userType = 'Administrator'
    }

    return (
        <>
            <div className="wd-container-profile pt-2">
                <div className="row wd-user-row mt-4">
                    <div className="col-4 ms-2 wd-pic-section pb-2">
                        {
                            currentUser &&
                            <div className="col-7 d-inline">
                                <div className="d-flex wd-name mt-3 fw-bolder">{currentUser.firstName} {currentUser.lastName}</div>
                                <div className="wd-image mt-2">
                                    <img src={userPic} className="rounded-circle" />
                                </div>
                                <span className="d-flex justify-content-center fw-bold text-success mb-4"> {userType} </span>
                                <div className="wd-userinfo mb-2 ms-2">
                                    <div className="text-secondary">Username : <span className="text-success">{currentUser.username}</span> </div>
                                    <div className="text-secondary">Handle : <span className="text-success">{currentUser.handle}</span> </div>
                                    <div className="text-secondary">E-mail : <span className="text-success">{currentUser.email}</span> </div>
                                    <div className="text-secondary">Phone : <span className="text-success">{currentUser.phone}</span> </div>
                                    <div className="text-secondary">Location : <span className="text-success">{currentUser.location}</span> </div>
                                    <div className="text-secondary">About me : <span className="text-success">{currentUser.bio}</span> </div>

                                </div>
                            </div>

                        }
                        <div className="d-inline">
                            <Link to="../edit-profile">
                                <button className="rounded-pill btn btn-primary float-end 
                                w-25 mt-2 ps-3 pe-3 me-2 mb-2 fw-bold text-white">Edit</button>
                            </Link>
                        </div>
                        <button
                            className="btn rounded-pill btn-danger mt-2 ms-2 mb-2 w-25 float-start"
                            onClick={handleLogoutBtn}>
                            Logout
                        </button>
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
                            <h2>Bookmarked Recipes</h2>
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

export default ProfileComponent;