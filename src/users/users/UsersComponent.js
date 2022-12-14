/*eslint-disable*/
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUserThunk, findAllUsersThunk } from "../users-thunk";
import { Link } from "react-router-dom";
import "./index.css"

const UsersComponent = () => {
    const { users, loading } = useSelector((state) => state.users)
    const { currentUser } = useSelector((state) => state.users);
    const uid = currentUser && currentUser._id;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return (
        <>
            <div className="wd-container-userslist">
                <div className="row wd-userheading">
                    <div className="col-12 wd-userheadingcol mt-4 mb-4">
                        <div className="wd-userheadingtext fw-bold">Find your fellow <span className="text-success">Creators</span> and follow them!</div>
                    </div>
                </div>
                <div className="row wd-userlist">
                    <div className="col-8 list-group wd-userlist">
                        {
                            users
                                .filter(u => u._id !== uid)
                                .map((user) =>
                                    <div className={`list-group-item rounded wd-text-${user.type}`}>
                                        <div className={`col-9 wd-text-${user.type}`}>
                                        <Link key={user._id} to={`/profile/${user._id}`}>
                                            {user.firstName} {user.lastName} <span className="text-secondary">&nbsp; - @{user.username}</span>
                                        </Link>
                                        </div>
                                        <div className={`col-3 fw-bold wd-usertype-text-${user.type}`}>
                                        {user.type === 'REGULAR' ? 'CASUAL' : user.type} 
                                        {currentUser.type === "ADMIN" &&
                                                         <i onClick={() => {
                                                             dispatch(deleteUserThunk(user._id))
                                                         }}
                                                            className="bi bi-trash float-end card-link"></i>}
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default UsersComponent;