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

const ProfileComponent = () => {
    const navigate = useNavigate()
    const { currentUser } = useSelector((state) => state.users)
    const { followers, following } = useSelector((state) => state.follows)
    const uid = currentUser._id;
    const { reviews } = useSelector((state) => state.reviews)
    const { recipes } = useSelector((state) => state.recipes)

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
    }, [])

    const userPic = currentUser && currentUser.type === 'REGULAR' ? regularPic : proPic;
    
    return (
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <div className="d-flex">
                    
                    <div>
                        <img src={userPic} className="w-1" />
                    </div>
                    <h2>Welcome user: {currentUser.username}</h2>
                </div>

            }
            {<ul>
                {
                    reviews && reviews.map((review) =>
                        <div>
                            {
                                !review.isApiCreated &&
                                <Link to={`/details/${review.recipeID}`}>
                                    {review.review} {review.recipeID}
                                </Link>
                            }
                            {
                                review.isApiCreated &&
                                <Link to={`/recipeDetails/${review.recipeID}`}>
                                    {review.review} {review.recipeID}
                                </Link>
                            }
                        </div>
                    )
                }
            </ul>}
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
            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}

export default ProfileComponent;