import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NavigationBarComponent = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];

    const userLoggedIn = false;

    return (
        <div className="list-group flex-row">
            <a href="#top" className="list-group-item">Whip Up</a>
            <Link to="/" className={`list-group-item ${active === '' ? 'active' : ''}`}>
                <i class="col-1 fa fa-home align-self-center"></i>
                <span className="ms-2">&nbsp;Home</span>
            </Link>
            <Link to="/search" className={`list-group-item ${active === 'search' ? 'active' : ''}`}>
                <i class="col-1 fa fa-hashtag align-self-center"></i>
                <span className="ms-2">&nbsp;Search</span>
            </Link>
            {userLoggedIn &&
                <Link to="/profile" className={`align-content-end list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i class="col-1 fa fa-home align-self-center"></i>
                    <span className="ms-2">&nbsp;Profile</span>
                </Link>
            }

            {!userLoggedIn &&
                <Link to="/login" className={`list-group-item ${active === 'login' ? 'active' : ''} justify-content-end`}>
                    <i class="col-1 fa fa-user align-self-center"></i>
                    <span className="ms-2">&nbsp;Log In</span>
                </Link>
            }
        </div>
    );
}

export default NavigationBarComponent;