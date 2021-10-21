import React from 'react';
import './FindCar.css'
import FindTitle from "./FindTitle/FindTitle";

const FindCar = (props) => {
    return (
        <div className="image_find">
            <div className="main_find">
                <form>
                    <FindTitle/>
                    <input type="text" id="location" placeholder="Location"/>
                    <input type="text" id="from" placeholder="From"/>
                    <input type="text" id="till" placeholder="Till"/>
                    <button type="submit">Y’alla!</button>
                </form>
            </div>
        </div>

    )
}


export default FindCar;