import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Student from "./Student";
// import Owanbe from '../components/Owanbe';
// import Gym from "./Gym";
// import TechBro from "./TechBro";
// import WorkFromHome from "./WorkFromHome";

const Home = () => {
    return (
        <div>
            <Navbar /> 
            {/* <TechBro /> */}
            {/* <WorkFromHome /> */}
            {/* <Gym /> */}
            {/* <Owanbe /> */}
            <Student />

            <PackNav />

            <Footer />
        </div>
    )
}
export default Home;