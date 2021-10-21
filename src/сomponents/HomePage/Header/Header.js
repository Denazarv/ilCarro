import React from 'react';
import Logo from "../../common/Logo/Logo";
import Menu from "./Menu/Menu";
import "./Header.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <NavLink to="/home"><Logo/></NavLink>
                    <Menu/>
                </div>
            </div>
        </header>
    )
}

export default Header;