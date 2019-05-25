import React from 'react';
import { Link } from 'react-router-dom';
import './styles/nav.css';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul className="nav__items">
                    <li className="nav__item">
                        <Link to="/">our recipes</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/add">add recipe</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/edit">edit recipe</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}