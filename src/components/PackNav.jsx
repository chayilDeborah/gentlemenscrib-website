import PackItem from './PackItem';
import React from 'react';

import '../css/PackNav.css';

function GlowUp () {
    const techbro = document.querySelector('#techbro');
    techbro.style.color = "#286086";
    console.log('it clicks');
}


const PackNav = (props) => {
    return (
        <div className='PackNav'>
            <span>Select a template</span>
            <PackItem id="techbro" onClick={GlowUp} href="/">Tech Bro</PackItem>
            <PackItem id="workfromhome" href="/workfromhome">Work from home</PackItem>
            <PackItem id="gym" href="/gym">Gym</PackItem>
            <PackItem id="owanbe" href="/owanbe">Owambe</PackItem>
            <PackItem id="student" href="/student">Student</PackItem>
            <PackItem id="corporatecasual" href="/corporatecasual">Corporate</PackItem>
            <PackItem id="partygoer" href="/partygoer">Party</PackItem>
            <PackItem id="rainingseason" href="/rainingseason">Raining</PackItem>
            <PackItem id="datenightspecial" href="/datenightspecial">Date Night</PackItem>
        </div>
    )
}

export default PackNav;