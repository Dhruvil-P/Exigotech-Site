import React from "react";
import ClientImg from "../../assets/Hero.jpg";

function Client(props){
    let clientImg = ClientImg;
    clientImg = props.img;

    return (
        <div className="client">
            <i className="fa-solid fa-quote-left quoteIcon"></i>
            <div className="clientDesc">{props.text}</div>
            <img className="clientImg" src={clientImg} />
            <div className="clientInfo">
                <div className="clientName">{props.name}</div>
                <div className="ratingsCont">
                    <i className="fa-solid fa-star starIcon"></i>
                    <div className="ratings">{props.rating}</div>
                </div>
            </div>
        </div>
    )
}

export default Client;