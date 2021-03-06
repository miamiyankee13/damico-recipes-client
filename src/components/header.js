import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import './styles/header.css';

const Header = props => {
    return (
        <header className="header">
            <div className="header__brand">
                <Link to="/" onClick={props.scrollTop}>
                    <h1 className="header__brand--heading">D'Amico Recipes</h1>
                </Link>
            </div>
            <i 
                onClick={props.toggleMobileNav} 
                className={props.visible ? "fas fa-bars fa-lg toggle-button rotated" : "fas fa-bars fa-lg toggle-button"}
            >
            </i>
            <Nav />
        </header>
    );
}

export default Header;