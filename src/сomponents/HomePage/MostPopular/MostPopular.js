import React from 'react';
import './MostPopular.css'
import MostText from "./MostText/MostText";
import CarBox from "./CarBox/CarBox";
import CarNames from "./CarNames/CarNames";
import CarPrices from "./CarPrices/CarPrices";

const MostPopular = (props) => {
    return (
        <>
        <MostText/>
            <div className="car-box_blue">
                <CarBox/>
            </div>
            <CarNames/>
            <CarPrices/>
        </>
)
}

export default MostPopular;