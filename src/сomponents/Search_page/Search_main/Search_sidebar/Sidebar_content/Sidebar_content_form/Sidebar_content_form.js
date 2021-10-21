import React from "react";
import "./Sidebar_content_form.css"

const Sidebar_content_form = () => {
    return (
        <div className="sidebar_content_form">
            <input type="text" placeholder="Location"/>
            <input type="date" name="from" placeholder="From"/>
            <input type="date" name="till" placeholder="Till"/>
        </div>
    )
};

export default Sidebar_content_form;