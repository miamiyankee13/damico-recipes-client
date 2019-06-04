import React from 'react';
import { Link } from 'react-router-dom';
import './styles/mobile-nav.css';

const MobileNav = props => {
    return (
        <nav 
            className={props.visibile ? "mobile-nav open" : "mobile-nav"} 
            onClick={props.toggleMobileNav}
        >
            <ul className="mobile-nav__items">
                <li className="mobile-nav__item">
                    <Link to="/" onClick={props.scrollTop}>our recipes</Link>
                </li>
                <li className="mobile-nav__item">
                    <Link to="/add" onClick={props.scrollTop}>add recipe</Link>
                </li>
                <li className="mobile-nav__item">
                    <Link to="/edit" onClick={props.scrollTop}>edit recipe</Link>
                </li>
            </ul>
        </nav>    
    );
}

export default MobileNav;