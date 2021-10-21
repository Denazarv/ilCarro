import React from 'react';
import zaz from '../../../../assets/img/zaz.png'
import gaz from '../../../../assets/img/gaz.png'
import azlk from '../../../../assets/img/azlk.png'

const CarBox = (props) => {
    return (
            <div className="car-box_blue">
                <div className="car-box_red">
                    <img className="car-box_img1" src={zaz} alt="Top1"/>
                    <img className="car-box_img2" src={gaz} alt="Top2"/>
                    <img className="car-box_img3" src={azlk} alt="Top3"/>
                </div>
            </div>
)
}

export default CarBox;