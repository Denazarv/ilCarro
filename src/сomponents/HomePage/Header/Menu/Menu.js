import React from 'react';
import './Menu.css'
import {NavLink} from "react-router-dom";

const Navigation = ({href,content}) => (
    <li><NavLink to={href}>{content}</NavLink></li>
);

const Menu = () =>{
    return(
        <div className="menu">
            <ul className="menu_list">
                <Navigation href="/search" content="Search"/>
                <Navigation href="/car" content="Let the car work"/>
                <Navigation href="/terms" content="Terms of use"/>
                <Navigation href="/registration" content="Sign up"/>
                <Navigation href="login" content="Log in"/>
            </ul>
        </div>
    )
};

export default Menu;


// ===========================================================




// const NavLink = (props) => (
//     <li className="active"><a href={props.href}>{props.content}</a></li>
// );
//
// return(
//     <div className={classString}>
//         <ul className="menu_list">
//             <NavLink href="#" content="Search"/>
//             <li><a href="#">Search</a></li>
//             <li><a href="#">Let the car work</a></li>
//             <li><a href="#">Terms of use</a></li>
//             <li><a href="#">Sign up</a></li>
//             <li><a href="#">Log in</a></li>
//         </ul>
//     </div>
// )
// };