import React from "react";
import AboutUsImg from "../../assets/AboutUsImg.jpg";
import Offering from "./Offering";
import offerings from "../../data/offerings";

function AboutUs(){
    return (
        <div className="aboutUs">
            <div className="aboutHeading sectionHeading">
                <p className="aboutTitleMain titleMain">Who We Are</p>
                <div className="aboutMore moreBtn">
                    <i className="fa-solid fa-arrow-down arrowIcon"></i>
                </div>
            </div>
            <div className="aboutGrid">
                <div className="aboutDetail">
                    <p className="aboutDesc">
                    Exigo Tech strongly believes that it is the right people with the right attitude and skillsets that define success for any organisation. We live by what we believe in, we staff skilled people with the right approach towards our company’s vision, mission and values. 
                    </p>
                    <div className="offerings">
                    {offerings.map(offering => (<Offering key={offering.key} desc={offering.description}/>))}
                    </div>
                </div>
                <div className="aboutImg">
                    <img className="aboutUsImg" src={AboutUsImg} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;