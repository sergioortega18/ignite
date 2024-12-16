import React from "react";
import Hero from "../components/Hero";
import NewsletterBox from "../components/NewsletterBox";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <NewsletterBox />

        </div>
    );
};

export default Home