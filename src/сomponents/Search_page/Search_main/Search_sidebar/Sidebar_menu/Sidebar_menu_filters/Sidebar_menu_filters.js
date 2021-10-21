import React from "react";
import "./Sidebar_menu_filters.css"
import filter_icon from "../../../../../../assets/icons/levels.png"
import {NavLink} from "react-router-dom";

const Sidebar_menu_filters = () => {
    return (
        <div className="sidebar_menu_filters">
            <NavLink to="#"><img src={filter_icon} alt=""/></NavLink>
        </div>
    )
};

export default Sidebar_menu_filters;