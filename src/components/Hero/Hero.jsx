import React from "react";
import heroImg from "../../assets/Hero.jpg";

console.log(heroImg);

function Hero(){
    return (
        <div className="hero">
            <div className="hero-left">
                <div className="heroText">
                    <p className="heading">
                        Make Your Business Grow, Transform.
                    </p>
                    <p className="subText">
                    We are an acclaimed global technology solutions provider that offers 
                    consulting, solutioning and delivery services to enable businesses to 
                    strengthen their IT (Information Technology) stature.
                    </p>
                </div>
                <div className="heroBtn">
                    <div className="startBtn">
                        Get Started
                        <i className="fa-solid fa-chevron-right arrowIos"></i>
                    </div>
                    <div className="learnBtn">Learn More</div>
                </div>
            </div>
            <div className="hero-right">
                <img className="heroImg" src={heroImg} alt="Hero Img" />
            </div>
        </div>
    )
}

export default Hero;