import React from 'react';
import './styles/backdrop.css';

const Backdrop = props => {
    return (
        <div  
            className={props.visible ? "backdrop open" : "backdrop" }
            onClick={props.toggleMobileNav}
        >
        </div>
    );
}

export default Backdrop;