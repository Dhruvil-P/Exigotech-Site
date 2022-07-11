import React from "react";
import servicesIcon from "../../assets/Services/CloudServices.svg";

function Service(props){
    let serviceIcon = servicesIcon;
    serviceIcon = "/src/assets/Services/" + props.icon;

    return (
        <div className="service">
            <div className="iconCont">
                <img className="serviceIcon" src={serviceIcon} alt={props.title}/>
            </div>
            <p className="serviceTitle">{props.title}</p>
            <p className="serviceDesc">{props.description}</p>
        </div>
    );
}

export default Service;