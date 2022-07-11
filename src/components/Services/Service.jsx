import React from "react";
import servicesIcon from "../../assets/Services/CloudServices.svg";

function Service(props){
    let serviceIcon = servicesIcon;
    console.log(serviceIcon);
    serviceIcon = "/src/" + props.icon;
    console.log(serviceIcon);

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