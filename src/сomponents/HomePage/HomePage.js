import React from 'react';
import Header from "./Header/Header";
import FindCar from "./FindCar/FindCar";
import IntermediateFooter from "./IntermediateFooter/IntermediateFooter";
import MostPopular from "./MostPopular/MostPopular";
import FeedBacks from "./FeedBacks/FeedBacks";
import Footer from "./Footer/Footer";

const HomePage = () =>{
    return(
        <div>
            <FindCar/>
            <IntermediateFooter/>
            <MostPopular/>
            <FeedBacks/>
        </div>
    )
};

export default HomePage;