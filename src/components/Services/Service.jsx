import React from "react";

function Service(props){
    return (
        <div className="service">
            <div className="iconCont">
                <img className="serviceIcon" src={props.icon} alt={props.title}/>
            </div>
            <p className="serviceTitle">{props.title}</p>
            <p className="serviceDesc">{props.description}</p>
        </div>
    );
}

export default Service;