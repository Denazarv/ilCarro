import React from "react";
import "./Sidebar_menu_map.css"
import map_icon from "../../../../../../assets/icons/placeholder.png";
import {NavLink} from "react-router-dom";


const Sidebar_map_button = () => {
    return (

        <div className="sidebar_menu_map">
            <NavLink to="/map"><img src={map_icon} alt=""/></NavLink>
        </div>
    )
};

export default Sidebar_map_button;