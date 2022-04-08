import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <p className="">DOG ARTICLES😋</p>
            </NavLink>
            <ul className="">
                <li>
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles" className="nav-link">
                        Articles
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;