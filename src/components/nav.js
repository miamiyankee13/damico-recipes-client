import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <ul className="main-nav__items">
                    <li className="main-nav__item">
                        <Link to="/">our recipes</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link to="/add">add recipe</Link>
                    </li>
                    <li className="main-nav__item">
                        <Link to="/edit">edit recipe</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}