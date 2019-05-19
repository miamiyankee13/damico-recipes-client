import React from 'react';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="main-header">
                    <div>
                        <h1 className="main-header__brand">Anthony & Britt's Recipes</h1>
                    </div>
                    <nav className="main-nav">
                        <ul className="main-nav__items">
                            <li className="main-nav__item">
                                <Link to="/">Our Recipes</Link>
                            </li>
                            <li className="main-nav__item">
                                <Link to="/">Add Recipe</Link>
                            </li>
                            <li className="main-nav__item">
                                <Link to="/">Edit Recipe</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <section id="recipes">
                        <article className="recipe">
                            <h2 className="recipe__title">Recipe Title</h2>
                            <h3 className="recipe__meal">Recipe Meal</h3>
                            <h3 className="recipe__type">Recipe Type</h3>
                        </article>
                        <article className="recipe">
                            <h2 className="recipe__title">Recipe Title</h2>
                            <h3 className="recipe__meal">Recipe Meal</h3>
                            <h3 className="recipe__type">Recipe Type</h3>
                        </article>
                        <article className="recipe">
                            <h2 className="recipe__title">Recipe Title</h2>
                            <h3 className="recipe__meal">Recipe Meal</h3>
                            <h3 className="recipe__type">Recipe Type</h3>
                        </article>
                        <article className="recipe">
                            <h2 className="recipe__title">Recipe Title</h2>
                            <h3 className="recipe__meal">Recipe Meal</h3>
                            <h3 className="recipe__type">Recipe Type</h3>
                        </article>
                        <article className="recipe">
                            <h2 className="recipe__title">Recipe Title</h2>
                            <h3 className="recipe__meal">Recipe Meal</h3>
                            <h3 className="recipe__type">Recipe Type</h3>
                        </article>
                        <article className="recipe">
                            <h2 className="recipe__title">Recipe Title</h2>
                            <h3 className="recipe__meal">Recipe Meal</h3>
                            <h3 className="recipe__type">Recipe Type</h3>
                        </article>
                    </section>
                </main>
                <footer className="main-footer">
                    <p className="main-footer__info">Copyright &copy; 2019 Anthony D'Amico</p>
                </footer>
            </React.Fragment>
        );
    }
}