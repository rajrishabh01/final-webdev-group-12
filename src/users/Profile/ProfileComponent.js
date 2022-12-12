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
import { findAllUsersThunk } from "../users-thunk";
import { findRecipesLikedByUserThunk } from "../../likes/likes-thunks";

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
                    <h2>Welcome user: {currentUser.username} </h2>
                    <h2>Handle: {currentUser.handle} </h2>
                </div>

            }
            <div>
                <Link to="../edit-profile">
                    <button className="rounded-pill btn btn-outline-secondary float-end w-25 mt-2 ps-3 pe-3 me-2 fw-bold text-black">Edit profile</button>
                </Link>
            </div>
            <h2>Reviews By User {reviews && reviews.length}</h2>
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
            <h2>Recipes By User {recipes && recipes.length}</h2>
            <div className="list-group">
                {
                    recipes && recipes.map((recipe) =>
                        <Link key={recipe._id} to={`/details/${recipe._id}`} className="list-group-item">
                            {recipe.title}
                        </Link>
                    )
                }
            </div>
            <h2>Following {following && following.length}</h2>

            <div className="list-group">
                {
                    following && following.map((follow) =>
                        <Link key={follow._id} to={`/profile/${follow.followed._id}`} className="list-group-item">
                            {follow.followed.username}
                        </Link>
                    )
                }
            </div>
            <h2>Followers {followers && followers.length}</h2>

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