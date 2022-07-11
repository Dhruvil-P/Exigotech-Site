import React from "react";

function Links(props){
    const [subText1, subText2, subText3] = props.subText;
    return (
        <div className="footerLinks">
            <div className="linkHeading">{props.heading}</div>
            <div className="linkSubtext">
                <p>{subText1}</p>
                <p>{subText2}</p>
                <p>{subText3}</p>
            </div>
        </div>
    )
}

export default Links;