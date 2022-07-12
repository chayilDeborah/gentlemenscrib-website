import PackItem from './PackItem';
import React from 'react';

import '../css/PackNav.css';

const PackNav = (props) => {
    return (
        <div className='PackNav'>
            <span>Select a template</span>
            <PackItem>Tech Bro</PackItem>
            <PackItem>Work from home</PackItem>
            <PackItem>Gym</PackItem>
            <PackItem>Owambe</PackItem>
            <PackItem>Student</PackItem>
            <PackItem>Corporate</PackItem>
            <PackItem>Party</PackItem>
            <PackItem>Raining</PackItem>
            <PackItem>Date Night</PackItem>
        </div>
    )
}

export default PackNav;