import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
// import TechBro from "./TechBro";
import WorkFromHome from "./WorkFromHome";

const Home = () => {
    return (
        <div>
            <Navbar /> 
            {/* <TechBro /> */}
            <WorkFromHome />
            <Footer />
        </div>
    )
}
export default Home;