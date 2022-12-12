import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FloatingLabel, FormGroup, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router";
import { updateUserThunk } from "../users-thunk";

const EditProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const [profile, setProfile] = useState(currentUser);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [email, setEmail] = useState(profile.email)
    const [phone, setPhone] = useState(profile.phone)
    const [handle, setHandle] = useState(profile.handle)


    let navigate = useNavigate();
    const routeChange = () => {
        let path = `../profile`;
        navigate(path);
    }

    const dispatch = useDispatch();
    const updateProfileHandler = () => {
        dispatch(updateUserThunk({
            ...profile,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            email: email,
            phone: phone,
            handle: handle
        })
        );
    }

    const handleFirstNameChange = (event) => {
        const newName = event.target.value;
        setFirstName(newName);
        const newProfile = {
            ...profile,
            firstName: firstName
        }
        setProfile(newProfile);
    }

    const handleLastNameChange = (event) => {
        const newName = event.target.value;
        setLastName(newName);
        const newProfile = {
            ...profile,
            lastName: lastName
        }
        setProfile(newProfile);
    }

    const handleBioChange = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: bio
        }
        setProfile(newProfile);
    }

    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
        const newProfile = {
            ...profile,
            location: location
        }
        setProfile(newProfile);
    }

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const newProfile = {
            ...profile,
            email: email
        }
        setProfile(newProfile);
    }

    const handleHandleChange = (event) => {
        const newHandle = event.target.value;
        setHandle(newHandle);
        const newProfile = {
            ...profile,
            handle: handle
        }
        setProfile(newProfile);
    }

    const handlePhoneChange = (event) => {
        const newPhone= event.target.value;
        setPhone(newPhone);
        const newProfile = {
            ...profile,
            phone: phone
        }
        setProfile(newProfile);
    }

    return (
        <>
        { currentUser && 
        <div className="row">
            <div className="col-10 col-lg-10 col-xl-12 border rounded px-0 py-2">
                <div className="row ps-2 pe-3">
                    <button className="btn col-1"
                        onClick={() => routeChange()}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <div className="col-9 pt-2">
                        <span className="fw-bold">Edit Profile</span>
                    </div>
                    <div className="col-2">
                        <button className="rounded-pill float-end btn btn-dark mb-2 me-1 pe-2 ps-2 fw-bold"
                            onClick={(event) => {
                                updateProfileHandler(event);
                                routeChange();
                            }}>
                            Save
                        </button>
                    </div>
                </div>
                <div className="row d-inline px-3">
                    <Form>
                        <FormGroup controlId="formGroupName" className="mt-3 mb-3">
                            <FloatingLabel id="formName" label="First Name">
                                <FormControl type="input" value={firstName}
                                    onChange={(event) => {
                                        handleFirstNameChange(event)
                                    }
                                    } />
                            </FloatingLabel>
                        </FormGroup>
                        <FormGroup controlId="formGroupLastName" className="mt-3 mb-3">
                            <FloatingLabel id="formLastName" label="First Name">
                                <FormControl type="input" value={lastName}
                                    onChange={(event) => {
                                        handleLastNameChange(event)
                                    }
                                    } />
                            </FloatingLabel>
                        </FormGroup>
                        <FormGroup controlId="formGroupBio" className="mt-3 mb-3">
                            <FloatingLabel id="formBio" label="Bio">
                                <FormControl type="input" value={bio}
                                    onChange={(event) => handleBioChange(event)}
                                />
                            </FloatingLabel>
                        </FormGroup>
                
                        <FormGroup controlId="formGroupWebsite" className="mt-3 mb-3">
                            <FloatingLabel id="formWebsite" label="E-mail">
                                <FormControl type="input" value={email}
                                    onChange={(event) => handleEmailChange(event)}
                                ></FormControl>
                            </FloatingLabel>
                        </FormGroup>
                        <FormGroup controlId="formGroupLocation" className="mt-3 mb-3">
                            <FloatingLabel id="formLocation" label="Location">
                                <FormControl type="input" value={location}
                                    onChange={(event) => handleLocationChange(event)}
                                ></FormControl>
                            </FloatingLabel>
                        </FormGroup>

                        <FormGroup controlId="formGroupPhone" className="mt-3 mb-3">
                            <FloatingLabel id="formPhone" label="Phone">
                                <FormControl type="input" value={phone}
                                    onChange={(event) => handlePhoneChange(event)}
                                ></FormControl>
                            </FloatingLabel>
                        </FormGroup>
                        <FormGroup controlId="formGroupHandle" className="mt-3 mb-3">
                            <FloatingLabel id="formHandle" label="Handle">
                                <FormControl type="input" value={handle}
                                    onChange={(event) => handleHandleChange(event)}
                                ></FormControl>
                            </FloatingLabel>
                        </FormGroup>
                    </Form>
                    <div>
                </div>
                </div>
            </div>
        </div>
        }
    </>
                );
}

export default EditProfileComponent;