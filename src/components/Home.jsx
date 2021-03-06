import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Thanks to the index.js file I wrote earlier you can call all the components in a single line
import { CorporateCasual, DateNightSpecial, Gym, Owanbe, PartyGoer, RainingSeason, Student, Navbar, TechBro, PackNav, WorkFromHome, Footer} from '../components'; 

import '../css/PackNav.css';
// import Gym from "./Gym";
// import TechBro from "./TechBro";
// import WorkFromHome from "./WorkFromHome";

const Home = () => {
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path='/' element={<TechBro />}/>
                <Route path='/owanbe' element={<Owanbe />}/>
                <Route path='/gym' element={<Gym />}/>
                <Route path='/workfromhome' element={<WorkFromHome />}/>
                <Route path='/corporatecasual' element={<CorporateCasual />}/>
                <Route path='/datenightspecial' element={<DateNightSpecial />}/>
                <Route path='/partygoer' element={<PartyGoer />}/>
                <Route path='/rainingseason' element={<RainingSeason />}/>
                <Route path='/student' element={<Student />}/>
            </Routes>

            {/* <TechBro /> */}
            {/* <WorkFromHome /> */}
            {/* <Gym /> */}

            <PackNav />

            <Footer />
        </Router>
    )
}
export default Home;