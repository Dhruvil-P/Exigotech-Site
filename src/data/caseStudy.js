import CS1 from "../assets/Case Studies/CS1.jpg"
import CS1_M from "../assets/Case Studies/CS1 M.jpg"
import CS2 from "../assets/Case Studies/CS2.jpg"
import CS3 from "../assets/Case Studies/CS3.jpg"
import CS4 from "../assets/Case Studies/CS4.jpg"
import CS5 from "../assets/Case Studies/CS5.jpg"

const caseStudies = [
    {
        key: 1,
        img: screen.width < 415 ? CS1_M : CS1,
        title: "Apex - Chat App Landing Page",
        description : screen.width < 415 ? "Apex’s main motive is too connect people across the globe. Robust, Secure, and with handful of features, this app makes" : "Apex’s main motive is too connect people across the globe. Robust, Secure, and with handful of features, this app makes your connections smooth. Let’s share our thoughts and get to know each other."
    },
    {
        key: 2,
        img: CS2,
        title: "Foodzy Mobile App UI",
        description : "Foodzy is a food delivery mobile app, it provides variety of food options in a glimpse."
    },
    {
        key: 3,
        img: CS3,
        title: "Movers Landing Page",
        description : "With Movers, you don’t need to worry about deliverables anymore."
    },
    {
        key: 4,
        img: CS4,
        title: "GIGA Landing Page",
        description : "Take your ecommerce management online with GIGA. Simple yet powerful."
    },
    {
        key: 5,
        img: CS5,
        title: "Crave’is Mobile App UI",
        description : "Craving for mouth-watering food? Crave’is to the rescue. Order now and enjoy your meal."
    },
]

export default caseStudies;