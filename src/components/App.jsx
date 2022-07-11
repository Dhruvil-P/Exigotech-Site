import React from "react";
import Nav from "./Hero/Nav";
import Hero from './Hero/Hero';
import Services from "./Services/Services";
import CaseStudies from "./Case Studies/CaseStudies";
import AboutUs from "./About Us/AboutUs";
import Clients from "./Clients/Clients";
import ContactUs from "./Contact Us/ContactUs";
import Footer from "./Footer/Footer";

function App(){
    return (
        <div className="main">
            <Nav />
            <Hero />
            <Services />
            <CaseStudies />
            <AboutUs />
            <Clients />
            <ContactUs />
            <Footer />
        </div>
        
    );
}

export default App;