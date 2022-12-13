/*eslint-disable*/
import React from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { loginThunk } from "../users-thunk";
import { unwrapResult } from "@reduxjs/toolkit";
import "./index.css"

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
    const [username, setUsername] = useState('username')
    const [password, setPassword] = useState('password')
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
            <div className="wd-container-login">
                <div className="col-6 wd-login-box pt-1 ps-4 pe-4 pb-2">
                    <h1 className="col-6 d-flex justify-content-center">Login</h1>
                    {
                        localError &&
                        <div className="alert alert-danger">
                            {localError}
                        </div>
                    }
                    <input
                        className="form-control wd-fc mb-2 ps-4"
                        placeholder={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <input
                        className="form-control wd-fc mb-2 ps-4"
                        placeholder={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)} />
                    <button
                        onClick={handleLoginBtn}
                        className="wd-btn w-100">
                        Continue
                    </button>
                </div>
            </div>
        </>
    )
}

export default LoginComponent;