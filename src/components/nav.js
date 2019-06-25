import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__items">
                <li className="nav__item">
                    <NavLink to="/recipes">our recipes</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/add">add recipe</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/edit">edit recipe</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;