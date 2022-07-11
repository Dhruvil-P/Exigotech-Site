import React from "react";
import caseStudies from "../../data/caseStudy";
import CaseStudy from "./CaseStudy";

function CaseStudies(){
    return (
        <div className="caseStudies">
            <div className="csHeading sectionHeading">
                <p className="csTitleMain titleMain">Our Case Studies</p>
                <div className="csMore moreBtn">
                    <i className="fa-solid fa-arrow-down arrowIcon"></i>
                </div>
            </div>
            <div className="csGrid">
                {caseStudies.map(caseStudy => (<CaseStudy key={caseStudy.key} img={caseStudy.img} title={caseStudy.title} desc={caseStudy.description} />))}
            </div>
        </div>
    )
}

export default CaseStudies;