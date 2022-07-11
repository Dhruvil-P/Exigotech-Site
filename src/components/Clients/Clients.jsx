import React from "react";
import Client from "./Client";
import clients from "../../data/clients";

function Clients(){
    return (
        <div className="clients">
            <div className="sectionHeading clientsHeading">
                <p className="clientsTitleMain titleMain">What clients say about us</p>
                <div className="clientsMore moreBtn">
                    <i className="fa-solid fa-arrow-down arrowIcon"></i>
                </div>
            </div>
            <div className="clientsGrid">
                <div className="clientsCardCont">
                    {clients.map(client => (
                        <Client
                            key={client.key}
                            text={client.text}
                            img={client.img}
                            name={client.name}
                            rating={client.rating}
                        />
                        ))}
                </div>
                <div className="carouselBtns">
                    <div className="previousBtn">
                        <i className="fa-solid fa-chevron-left clientArrow"></i>
                    </div>
                    <div className="nextBtn">
                        <i className="fa-solid fa-chevron-right clientArrow"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;