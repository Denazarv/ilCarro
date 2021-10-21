import React from 'react';
import {NavLink} from "react-router-dom";
import "./Logo.css"
import logo from "../../../assets/img/logo2.png"


const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
    )
};

export default Logo;