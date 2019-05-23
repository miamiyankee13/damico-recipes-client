import React from 'react';
import Nav from './nav';

export default class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div>
                    <h1 className="main-header__brand">D'Amico Recipes</h1>
                </div>
                <i onClick={this.props.toggleMobileNav} className="fas fa-bars toggle-button"></i>
                <Nav />
            </header>
        );
    }
}