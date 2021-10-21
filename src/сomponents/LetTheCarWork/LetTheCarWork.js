import React from 'react';
import './LetTheCarWork.css';

const LetTheCarWork = () =>{
    return(
        <div className="upload_form">
            <div style={{paddingLeft: 100}}>
                <div className="title_1">Let the car work</div>
                <div className="title_2">Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee
                    cotton candy cake chocolate
                    cake. Bonbon gummi bears jelly-o bonbon fruitcake tootsie roll cake cookie gingerbread. Icing wafer
                    pie pudding ice cream bonbon halvah bonbon topping. Donut halvah tiramisu bear claw tart.
                </div>
                <div className="car_details">
                    <p>Location:</p>
                    <li><input type="text" list="test" placeholder="Country"/></li>
                    <li><input type="text" placeholder="Street"/></li>
                    <li><input type="text" placeholder="City"/></li>
                    <li><input type="text" list="test" placeholder="State/Region/Province"/></li>
                    <li><input type="text" placeholder="ZIP"/></li>

                    <p className="car-det">Car details:</p>
                    <li><input type="text" list="test" placeholder="Make"/></li>
                    <li><input type="text" list="test" placeholder="Model"/></li>
                    <li><input type="text" list="test" placeholder="Year"/></li>
                    <li><input type="text" list="test" placeholder="Engine"/></li>
                    <li><input type="text" list="test" placeholder="Fuel"/></li>
                    <li><input type="text" list="test" placeholder="Transmission"/></li>
                    <li><input type="text" list="test" placeholder="WD"/></li>
                    <li><input type="text" list="test" placeholder="Horsepower"/></li>
                    <li><input type="text" list="test" placeholder="Torque"/></li>
                    <li><input type="text" list="test" placeholder="Doors"/></li>
                    <li><input type="text" list="test" placeholder="Seats"/></li>
                    <li><input type="text" list="test" placeholder="Class"/></li>
                    <li><input type="text" list="test" placeholder="Fuel consumption"/></li>

                    <p className="car-det-about">About:</p>
                    <textarea maxLength="500" type="text" placeholder="About (max 500 chars)"/>

                    <p>Features:</p>
                    <input type="text" placeholder="Type feature"/>

                        <p className="car-det-perday">Price per day:</p>
                        <input type="text" placeholder="Price"/>
                </div>

                <button type="submit">Submit</button>

                <datalist id="test">
                    <option>First</option>
                    <option>Second</option>
                    <option>Third</option>
                </datalist>
            </div>
        </div>
    )
}


export default LetTheCarWork;