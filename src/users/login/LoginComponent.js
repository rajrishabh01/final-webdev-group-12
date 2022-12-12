/*eslint-disable*/
import React from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { loginThunk } from "../users-thunk";
import {unwrapResult} from "@reduxjs/toolkit";

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
            {
                localError &&
                <div className="alert alert-danger">
                    {localError}
                </div>
            }
            <input
                className="form-control mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input
                className="form-control mb-2"
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
        </>
    )
}

export default LoginComponent;