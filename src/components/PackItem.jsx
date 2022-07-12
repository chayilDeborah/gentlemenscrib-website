import '../css/PackNav.css'
import React from 'react';

import '../css/PackNav.css';

const PackItem = (props) => {
    return (
        <a className='PackItem' id={props.id}>
            {props.children}
        </a>
    )
}

export default PackItem;