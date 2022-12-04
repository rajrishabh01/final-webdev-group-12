import React from "react";
import { Routes, Route } from "react-router";
import ProfileComponent from "./Profile";
import EditProfileComponent from "./edit-profile";
import HomeComponent from "./Home";
import SearchComponent from "./search";
import SidebarComponent from "./sidebar";

const Whipup = () => {
    return (
        //Add Provider here
        <div className="container">
            <div className="row mt-2">
                <div className="col-12 col-md-12 col-lg-8 col-xl-8 bg-danger float-start"
                    style={{ "position": "relative" }}>
                    <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route path="home" element={<HomeComponent />} />
                        <Route path="profile" element={<ProfileComponent />} />
                        <Route path="edit-profile" element={<EditProfileComponent />} />
                        <Route path="search" element={<SearchComponent />} />
                    </Routes>

                </div>
                <div className="d-sm-none d-md-none d-lg-block
                 col-lg-3 col-xl-3 bg-secondary ms-5 float-left">
                    <SidebarComponent />
                </div>
            </div>
        </div>
    );
}

export default Whipup;