import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                        <Link to="/">Our Recipes</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link to="/add">Add Recipe</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link to="/edit">Edit Recipe</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}