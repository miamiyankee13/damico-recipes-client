import React from 'react';
import { Link } from 'react-router-dom';

export default class MobileNav extends React.Component {
    
    render() {
        return (
            <nav 
                className={this.props.visibile ? "mobile-nav open" : "mobile-nav"} 
                onClick={this.props.toggleMobileNav}
            >
                <ul className="mobile-nav__items">
                    <li className="mobile-nav__item">
                        <Link to="/">Our Recipes</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link to="/add">Add Recipe</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link to="/edit">Edit Recipe</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}