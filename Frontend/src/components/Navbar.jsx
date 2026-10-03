import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import './Navbar.css'



function Navbar () {
    const navigate = useNavigate();
    const [token, setToken] = useState(localStorage.getItem("token"));

useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const googleToken = params.get("token");

    if (googleToken) {
        localStorage.setItem("token", googleToken);
        setToken(googleToken);
        window.history.replaceState({}, document.title, "/");
    }
}, []);

    const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/signin");
};


return (
    <nav className ="navbar">
        <div>
            <h1>
                InternFind
            </h1>
        </div>
        <div>
           <input type="text" placeholder="Search.." />
        </div>
        <div>

            <span>Rishav</span>
        </div>
        <div className="auth-buttons">
            {token ? (
    <button onClick={handleLogout} className="signin-btn">
        Logout
    </button>
) : (
    <>
        <Link to="/signin" className="signin-btn">
            Sign In
        </Link>

        <Link to="/signup" className="signup-btn">
            Sign Up
        </Link>
    </>
)}
        </div>
    </nav>
)
}
export default Navbar;