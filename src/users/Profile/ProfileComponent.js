/*eslint-disable*/
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { logoutThunk } from "../users-thunk";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {findFollowersThunk, findFollowingThunk} from "../../follows/follows-thunks";


const ProfileComponent = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const {followers, following} = useSelector((state) => state.follows)
    const uid = currentUser._id;
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    useEffect(() => {
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    },[])
    return(
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome user: {currentUser.username}</h2>
            }
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