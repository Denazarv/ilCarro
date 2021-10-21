import React from 'react';
import './Registration.css'
import IntermediateFooter from "../HomePage/IntermediateFooter/IntermediateFooter";
import MostPopular from "../HomePage/MostPopular/MostPopular";
import FeedBacks from "../HomePage/FeedBacks/FeedBacks";



const Registration = (props) =>{
    return(
        <div>
        <div className="back_img">
            <div className="reg_form">
                <form className="registration" >
                    <p className="reg_title">Registration</p>
                    <p className="find_under_title">Type your data and hit Yalla!</p>
                    <input type="text" id="name" placeholder="Name"/>
                        <input type="text" id="last_name" placeholder="Last name"/>
                            <input type="text" id="email" placeholder="Email"/>
                                <input type="text" id="pass" placeholder="Password"/><br/>
                </form>
                <div className="reg_check">
                    <input type="checkbox" id="reg_check"/> I agree to the <a href="#"><u>terms of use</u></a> and <a
                        href="#"><u>privacy policy</u></a>.
                </div>
                <button type="submit">Y’alla!</button>
            </div>
        </div>
        <IntermediateFooter/>
        <MostPopular/>
        <FeedBacks/>
        </div>
    )
}


export default Registration;