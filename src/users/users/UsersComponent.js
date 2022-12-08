/*eslint-disable*/
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { findAllUsersThunk } from "../users-thunk";
import {Link} from "react-router-dom";

const UsersComponent = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h1>Users {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <Link key={user._id} to={`/profile/${user._id}`} className="list-group-item">
                            {user.username}
                        </Link>
                    )
                }
            </ul>
        </>
    )
}

export default UsersComponent;