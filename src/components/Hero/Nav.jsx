import React from "react";
import logo from "../../assets/Logo.png";

function Nav(){
    return (
        <div className="nav">   
            <img className="navLogo" src={logo} alt="Nav Logo" />
            <div className="navItems">
                <div className="items">Home</div>
                <div className="items">Services</div>
                <div className="items">Case Studies</div>
                <div className="items">About</div>
                <div className="items">Testimonials</div>
            </div>
            <div className="navBtn">Contact Us</div>
        </div>
    )
}

export default Nav;