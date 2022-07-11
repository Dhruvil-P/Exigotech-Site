import React from "react";
import ContactUsImg from "../../assets/ContactUsImg.jpg";

function ContactUs(){
    return (
        <div className="contactUs">
            <div className="sectionHeading">
                <p className="contactTitleMain titleMain">Accelerate your business</p>
            </div>
            <div className="contactCont">
                <div className="contact">
                    <p className="contactHeading">Connect with us</p>
                    <div className="contactForm">
                        <div className="contactInput">
                            <label>Full name</label>
                            <input type="text" placeholder="Enter your full name here"/>
                        </div>
                        <div className="contactInput">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email here"/>
                        </div>
                        <div className="contactInput">
                            <label>Message</label>
                            <textarea placeholder="Enter your message here"/>
                        </div>  
                    </div>
                    <div className="contactBtn">Submit</div>
                </div>
                <img className="contactUsImg" src={ContactUsImg} alt="Contact Us Image"/>
            </div>
        </div>
    )
}

export default ContactUs;