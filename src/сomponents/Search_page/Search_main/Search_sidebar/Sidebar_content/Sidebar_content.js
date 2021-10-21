import React from "react";
import "./Sidebar_content.css"
import Sidebar_content_form from "./Sidebar_content_form/Sidebar_content_form";
import Sidebar_sort from "./Sidebar_sort/Sidebar_sort";
import Sidebar_range from "./Sidebar_range/Sidebar_range";

const Sidebar_content = () => {
    return (
        <div className="sidebar_content">
            <h3>Find your car now!</h3>
            <Sidebar_content_form/>
            <Sidebar_sort/>
            <Sidebar_range/>
        </div>
    )
};

export default Sidebar_content;