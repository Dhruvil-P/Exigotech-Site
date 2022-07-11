import React from "react";

function Offering(props){
    return (
        <div className="offering">
            <div className="checkCont"><i class="fa-solid fa-check"></i></div>
            <div className="offeringDesc">{props.desc}</div>
        </div>
    )
}

export default Offering;