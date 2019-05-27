import React from 'react';
import { Link } from 'react-router-dom';
import './styles/mobile-nav.css';

export default class MobileNav extends React.Component {
    constructor(props) {
        super(props);

        this.scrollTop = this.scrollTop.bind(this);
    }

    scrollTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <nav 
                className={this.props.visibile ? "mobile-nav open" : "mobile-nav"} 
                onClick={this.props.toggleMobileNav}
            >
                <ul className="mobile-nav__items">
                    <li className="mobile-nav__item">
                        <Link to="/" onClick={this.scrollTop}>our recipes</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link to="/add" onClick={this.scrollTop}>add recipe</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link to="/edit" onClick={this.scrollTop}>edit recipe</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}