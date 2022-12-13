/*eslint-disable*/
import React from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { loginThunk } from "../users-thunk";
import {unwrapResult} from "@reduxjs/toolkit";

const style ={
    'borderRadius': '16px',
    // 'background': '#b0cbf7',
    // 'boxShadow': 'inset 5px 5px 10px #465163, inset -5px -5px 10px #ffffff',
    'position': 'absolute',
    'top':'auto',
    'left': '0',
    'right': '0',
    'bottom': 'auto',
    'margin': 'auto'
}


const LoginComponent = () => {
    const [username, setUsername] = useState('dan')
    const [password, setPassword] = useState('dan123')
    const [localError, setLocalError] = useState(null)
    const { currentUser } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setLocalError(null)
        const loginUser = { username, password }
        const result = true
        try {
            result = dispatch(loginThunk(loginUser)).then(unwrapResult)
        } catch {
            setLocalError("Failed to Login. Either Register first or Try again.")
        }
    }

    if (currentUser) {
        return (<Navigate to={'/profile'} />)
    }
    return (
        <>
            <h1>Login</h1>
            <div className="row m-5 bg-info text-center">
                    <div className="border text-md-center w-25 " style={style}>

                    {
                        localError &&
                        <div className="alert alert-danger">
                            {localError}
                        </div>
                    }
                    <label htmlFor="inputForUserName"
                           className="form-label">
                        Username:
                    </label>
                    <input
                        className="form-control mb-2"
                        id = "inputForUserName"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="inputForPassword"
                           className="form-label">
                        Password:
                    </label>
                    <input
                        className="form-control mb-2"
                        id="inputForPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button
                        onClick={handleLoginBtn}
                        className="btn btn-primary w-100">
                        Login
                    </button>
                    {
                        currentUser &&
                        <h2>Welcome {currentUser.username}</h2>
                    }

                </div>

            </div>
        </>
    )
}

export default LoginComponent;