import { Link } from "react-router-dom";
import { useLocation } from "react-router";
//import {useSelector} from "react-redux";

const Navigation = () => {
    //const {currentUser} = useSelector((state) => state.users)
    const currentUser = true;
    const { pathname } = useLocation()
    const parts = pathname.split('/')
    console.log(parts)
    return (
        <div className="wd-nav mt-2">
            <ul className="nav nav-pills col-8 justify-content-start">
                <li className="nav-item">
                    <Link to="/"
                        className="nav-link wd-icon ">
                        Whip Up
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link to="/"
                        className={`nav-link ${parts[1] === '' ? 'active' : ''}`}>
                            <i class="fa fa-home align-self-center me-1"></i>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/search"
                        className={`nav-link ${parts[1] === 'search' ? 'active' : ''}`}>
                            <i class="fa fa-search align-self-center me-1"></i>
                        Search Recipes
                    </Link>
                </li>
                <li className={`nav-item ${!currentUser ? 'd-none' : ''}`}>
                    <Link to="/users"
                        className={`nav-link ${parts[1] === 'users' ? 'active' : ''}`}>
                        Creators
                    </Link>
                </li>
            </ul>
            <ul className="nav nav-pills col-3 justify-content-end">
                <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
                    <Link to="/login"
                        className={`nav-link ${parts[1] === 'login' ? 'active' : ''}`}>
                        Login
                    </Link>
                </li>
                <li className={`nav-item ${currentUser ? 'd-none' : ''}`}>
                    <Link to="/register"
                        className={`nav-link ${parts[1] === 'register' ? 'active' : ''}`}>
                        Register
                    </Link>
                </li>
                <li className={`nav-item ${!currentUser ? 'd-none' : ''}`}>
                    <Link to="/profile"
                        className={`nav-link ${parts[1] === 'profile' ? 'active' : ''}`}>
                        Profile
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default Navigation