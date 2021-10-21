import React from "react";
import "./Sidebar_sort.css"
import Sort_option_high from "./Sort_option_high/Sort_option_high";
import Sort_option_low from "./Sort_option_low/Sort_option_low";

const Sidebar_sort = () => {
    return (
        <div className="sidebar_sort">
            <h4>Sort by:</h4>
            <Sort_option_high/>
            <Sort_option_low/>

        </div>
    )
};

export default Sidebar_sort;