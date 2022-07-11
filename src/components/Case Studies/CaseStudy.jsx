import React from "react";
import CSImg from "../../assets/Hero.jpg";

function CaseStudy(props){
    return (
        <div className="caseStudy">
            <img className="csImg" src={props.img} alt="Case Study Image"/>
            <p className="csTitle">{props.title}</p>
            <p className="csDesc">{props.desc}</p>
        </div>
    )
}

export default CaseStudy;