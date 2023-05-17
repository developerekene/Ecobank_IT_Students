import React from "react";
import "./NavBar.css"


const Navbar = () => {
    return (
        <div className="navMainDiv">
            <div className="subDiv">
                <a href="/" className="logoTitle">CharPeD</a>
            <div>
                <ul className="ulDiv">
                    <a href="/profile-page" className="listItems">
                        <li>Profile</li>
                    </a>
                    <a href="/course-page" className="listItems">
                        <li>Courses</li>
                    </a>
                    <a href="/setting-page" className="listItems">
                        <li>Settings</li>
                    </a>
                    <a href="#" className="listItems">
                        <li>About Us</li>
                    </a>
                    <a href="#" className="listItems">
                        <li>Contact us</li>
                    </a>
                </ul>
            </div>
            </div>
            <div className="lastNav">
                <div className="firstText">
                    <a href="#" className="listItems">
                        <li>Login</li>
                    </a> 
                </div>
                <div className="lastText">
                    <a href="#" className="listItems">
                        <li>Sign Up</li>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar