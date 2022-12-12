import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../users-thunk";
import { Navigate } from "react-router";
import Form from 'react-bootstrap/Form';
import { FloatingLabel, FormGroup, FormControl } from "react-bootstrap";
import "./index.css";

const RegisterComponent = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [phone, setPhone] = useState('')
    const [type, setType] = useState('')
    const [handle, setHandle] = useState('')
    const [location, setLocation] = useState('')
    const [validatePassword, setValidatePassword] = useState('')
    const [error, setError] = useState(null)
    const { currentUser } = useSelector((state) => state.users)


    const dispatch = useDispatch()

    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError('Passwords must match')
            return
        }
        setError(null)
        const newUser = { username, password, email, bio, phone, type, location, handle, firstName, lastName }
        dispatch(registerThunk(newUser))
    }

    if (currentUser) {
        return (<Navigate to={'/profile'} />)
    }

    return (
        <>
            <div className="wd-container-reg">
                <div className="row d-flex">
                    <div className="col-6 float-right wd-registration">
                        Welcome! <br></br>
                        Join Our Family!
                    </div>
                    <div className="wd-form col-5 float-end pt-5 ps-2 ms-3">
                        {
                            error &&
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        }
                        <Form>
                        <FormGroup controlId="formGroupFirstName" className="mt-3 mb-3">
                                <FloatingLabel id="formFirstName" label="First Name">
                                    <FormControl type="input" value={firstName}
                                        onChange={(event) => {
                                            setFirstName(event.target.value)
                                        }
                                        } />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupLastName" className="mt-3 mb-3">
                                <FloatingLabel id="formLastName" label="Last Name">
                                    <FormControl type="input" value={lastName}
                                        onChange={(event) => {
                                            setLastName(event.target.value)
                                        }
                                        } />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupHandleName" className="mt-3 mb-3">
                                <FloatingLabel id="formHandleName" label="What would like to known as to other creators?">
                                    <FormControl type="input" value={handle}
                                        onChange={(event) => {
                                            setHandle(event.target.value)
                                        }
                                        } />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupUserName" className="mt-3 mb-3">
                                <FloatingLabel id="formName" label="Username">
                                    <FormControl type="input" value={username}
                                        onChange={(event) => {
                                            setUsername(event.target.value)
                                        }
                                        } />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupPassword" className="mt-3 mb-3">
                                <FloatingLabel id="formPass" label="Password">
                                    <FormControl type="password" value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupPasswordRe" className="mt-3 mb-3">
                                <FloatingLabel id="formPassRe" label="Re-enter Password">
                                    <FormControl type="password" value={validatePassword}
                                        onChange={(event) => setValidatePassword(event.target.value)}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupLocation" className="mt-3 mb-3">
                                <FloatingLabel id="formLocation" label="Location">
                                    <FormControl type="input" value={location}
                                        onChange={(event) => setLocation(event.target.value)}
                                    ></FormControl>
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupEmail" className="mt-3 mb-3">
                                <FloatingLabel id="formEmail" label="E-mail">
                                    <FormControl type="input" value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    ></FormControl>
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupPhone" className="mt-3 mb-3">
                                <FloatingLabel id="formPhone" label="Phone">
                                    <FormControl type="input" value={phone}
                                        onChange={(event) => setPhone(event.target.value)}
                                    ></FormControl>
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup controlId="formGroupBio" className="mt-3 mb-3">
                                <FloatingLabel id="formBio" label="Tell Us About Yourself">
                                    <FormControl type="input" value={bio}
                                        onChange={(event) => setBio(event.target.value)}
                                    ></FormControl>
                                </FloatingLabel>
                            </FormGroup>
                            <span className="d-flex justify-content-center pt-2 pb-2"> What Kind of Content would you like to create?</span>
                            <div className="wd-reg-radios mb-2 pb-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="REGULAR" onChange={(event) => setType(event.target.value)} />
                                    <label className="form-check-label" for="inlineRadio1">CASUAL</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="PRO" onChange={(event) => setType(event.target.value)} />
                                    <label className="form-check-label" for="inlineRadio2">PROFESSIONAL</label>
                                </div>
                            </div>
                        </Form>
                        <div>
                            <button
                                onClick={handleRegisterBtn}
                                className="wd-btn w-100">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent;