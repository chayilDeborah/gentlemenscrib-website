import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import TechBro from "./TechBro";

const Home = () => {
    return (
        <div>
            <Navbar /> 
            <TechBro />
            <Footer />
        </div>
    )
}
export default Home;