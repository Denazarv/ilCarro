import React from "react";
import "./Sidebar_menu_search.css"
import Sidebar_map_button from "../Sidebar_menu_map/Sidebar_map_button";
import search_icon from "../../../../../../assets/icons/magnifying-glass.png";
import {NavLink} from "react-router-dom";
import map_icon from "../../../../../../assets/icons/placeholder.png";

const Sidebar_search_button = () => {
    return (
        <div className="sidebar_menu_search">
            <NavLink to="#"><img src={search_icon} alt=""/><p>Search</p></NavLink>

        </div>

    )
};

export default Sidebar_search_button;