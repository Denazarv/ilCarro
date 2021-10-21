import React from "react";
import "./Sidebar_menu.css"
import Sidebar_search_button from "./Sidebar_menu_search/Sidebar_search_button";
import Sidebar_menu_filters from "./Sidebar_menu_filters/Sidebar_menu_filters";
import Sidebar_map_button from "./Sidebar_menu_map/Sidebar_map_button";
import {Route} from "react-router-dom";
import {TabList, Tabs} from "react-tabs";
import HomePage from "../../../../HomePage/HomePage";

const Sidebar_menu = () => {
    return (
        <div className="sidebar_menu">

            <Sidebar_search_button/>
            <Sidebar_menu_filters/>
            <Sidebar_map_button/>
        </div>
    )
};

export default Sidebar_menu;