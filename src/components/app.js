import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import RecipesPage from './recipes-page';
import RecipePage from './recipe-page';
import AddRecipePage from './add-recipe-page';
import EditRecipePage from './edit-recipe-page';

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="main-header">
                    <div>
                        <h1 className="main-header__brand">D'Amico Recipes</h1>
                    </div>
                    <i className="fas fa-bars toggle-button"></i>
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
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={RecipesPage} />
                        <Route exact path="/recipes/:id" component={RecipePage} />
                        <Route exact path="/add" component={AddRecipePage} />
                        <Route exact path="/edit" component={EditRecipePage} />
                    </Switch>
                </main>
                <footer className="main-footer">
                    <p className="main-footer__info">Copyright &copy; 2019 Anthony D'Amico</p>
                </footer>
            </React.Fragment>
        );
    }
}

export default withRouter(App);