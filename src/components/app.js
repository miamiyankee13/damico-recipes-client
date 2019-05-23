import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './header';
import MobileNav from './mobile-nav';
import RecipesPage from './recipes-page';
import RecipePage from './recipe-page';
import AddRecipePage from './add-recipe-page';
import EditRecipePage from './edit-recipe-page';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNav: false
        };

        this.toggleMobileNav = this.toggleMobileNav.bind(this);

    }

    toggleMobileNav() {
        this.setState(prevState => {
            return { mobileNav: !prevState.mobileNav }
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <Header toggleMobileNav={this.toggleMobileNav} />
                <MobileNav visibile={this.state.mobileNav} />
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