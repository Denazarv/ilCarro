import React from 'react';
import './Login.css'
import FindCar from "../HomePage/FindCar/FindCar";
import IntermediateFooter from "../HomePage/IntermediateFooter/IntermediateFooter";
import MostPopular from "../HomePage/MostPopular/MostPopular";
import FeedBacks from "../HomePage/FeedBacks/FeedBacks";


const Login = (props) => {
    return (
        <div>
            <div className="back_img">
                <div className="reg_form">
                    <form className="registration">
                        <p className="reg_title">Log in</p>
                        <p className="find_under_title">Type your data and hit Yalla!</p>
                        <input type="text" id="email" placeholder="Email"/>
                        <input type="text" id="pass" placeholder="Password"/><br/>
                    </form>
                    <button type="submit">Y’alla!</button>
                    <div className="log_forgot">Forgot your password? <u>Click here.</u></div>
                </div>

            </div>
            <IntermediateFooter/>
            <MostPopular/>
            <FeedBacks/>
        </div>
    )
}

export default Login;