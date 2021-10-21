import React from "react";
import "./Car_item.css"
import Car_item_price from "./Car_item_price/Car_item_price";
import Car_item_title from "./Car_item_title/Car_item_title";
import Car_item_image from "./Car_item_image/Car_item_image";


const Car_item = () => {
    return (
        <div className="car-item">
            <Car_item_image/>
            <Car_item_title/>
            <Car_item_price/>
        </div>
    )
};

export default Car_item;