import React from "react";
import "./Search_main.css";
import Search_sidebar from "./Search_sidebar/Search_sidebar";
import Search_content from "./Search_content/Search_content";


const Search_main = () => {
    return (
        <div className="search_main">
            <Search_sidebar/>
            <Search_content/>
        </div>
    )
};

export default Search_main;