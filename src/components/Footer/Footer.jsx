import React from "react";
import LogoImg from "../../assets/Logo.png";
import Links from "./Links"; 
import links from "../../data/footerLinks";

function Footer(){
    return (
        <div className="footer">
            <div className="footerSections">
            <div className="upperSection">
            <div className="sect1">
                <img src={LogoImg} alt="Logo"/>
                <p className="sect1Text">Make Your Business Grow, Transform.</p>
                <hr></hr>
                <div className="phoneCont">
                    <i class="fa-solid fa-phone"></i>
                    <p className="num">1300 394 468</p>
                </div>
            </div>
            <div className="sect2">
                {links.map(link => (<Links key={link.key} heading={link.heading} subText={link.subText} />))}
            </div>
            <div className="sect3">
                <i className="fa-brands fa-linkedin socialIcons"></i>
                <i className="fa-brands fa-facebook-square socialIcons"></i>
                <i className="fa-brands fa-instagram-square socialIcons"></i>
                <i className="fa-brands fa-twitter-square socialIcons"></i>
            </div>
            </div>
            <div className="lowerSection">
            <div className="copyrightText">©️ Copyright 2022 Exigotech Tech. All rights reserved</div>
            </div>
            </div>
        </div>
    )
}

export default Footer;