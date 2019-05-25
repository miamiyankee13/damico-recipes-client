import React from 'react';
import Nav from './nav';
import './styles/header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div>
                    <h1 className="header__brand">D'Amico Recipes</h1>
                </div>
                <i 
                    onClick={this.props.toggleMobileNav} 
                    className={this.props.visible ? "fas fa-bars fa-lg toggle-button rotated" : "fas fa-bars fa-lg toggle-button"}
                >
                </i>
                <Nav />
            </header>
        );
    }
}