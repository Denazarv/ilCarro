import React from 'react';
import "./Footer.css"
import Logo from "../../common/Logo/Logo";
import Social from "./Social/Social";
import Cities from "./Cities/Cities";
import FooterMenu from "./FooterMenu/FooterMenu";
import NumberAndContact from "./NumberAndContact/NumberAndContact";
import RedBlockText from "./RedBlockText/RedBlockText";
import FooterDesc from "./FooterDesc/FooterDesc";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_top">
                <FooterDesc/>
                <Logo/>
                <Social/>
            </div>
            <div className="footer_bottom">
                <div className="red_block">
                    <RedBlockText/>
                </div>
                <div className="rightInfo">
                    <FooterMenu/>
                    <div className="line">
                        <hr/>
                    </div>
                    <div className="citiesAndTel">
                        <Cities/>
                        <NumberAndContact/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;