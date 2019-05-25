import React from 'react';
import { Link } from 'react-router-dom';
import './styles/mobile-nav.css';

export default class MobileNav extends React.Component {
    
    render() {
        return (
            <nav 
                className={this.props.visibile ? "mobile-nav open" : "mobile-nav"} 
                onClick={this.props.toggleMobileNav}
            >
                <ul className="mobile-nav__items">
                    <li className="mobile-nav__item">
                        <Link to="/">our recipes</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link to="/add">add recipe</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link to="/edit">edit recipe</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}