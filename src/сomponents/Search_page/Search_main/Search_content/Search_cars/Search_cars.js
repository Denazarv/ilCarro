import React from "react";
import "./Search_cars.css"
import Car_item from "./Car_item/Car_item";

const Search_cars = () => {
    return (
        <div className="search_cars">
            <Car_item/>
            <Car_item/>
            <Car_item/>
            <Car_item/>
            <Car_item/>
            <Car_item/>
        </div>
    )
};

export default Search_cars;