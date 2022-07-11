import React from "react";
import Service from "./Service";
import services from "../../data/services";

function Services(){
    return (
        <div className="services">
            <div className="sectionHeading">
                <p className="serviceTitleMain titleMain">Services We Offer</p>
                <div className="servicesMore moreBtn">
                    <i className="fa-solid fa-arrow-down arrowIcon"></i>
                </div>
            </div>
            <div className="serviceGrid">
                {services.map(service => (
                    <Service
                        key={service.key}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                    ))}
            </div>
        </div>
    )
}

export default Services;