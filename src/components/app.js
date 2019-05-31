import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Backdrop from './backdrop';
import Header from './header';
import MobileNav from './mobile-nav';
import Footer from './footer';
import RecipesPage from './recipes-page';
import RecipePage from './recipe-page';
import AddRecipePage from './add-recipe-page';
import EditRecipePage from './edit-recipe-page';
import NotFoundPage from './not-found-page';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNav: false,
        };

        this.toggleMobileNav = this.toggleMobileNav.bind(this);

    }

    //toggle status of mobile nav
    toggleMobileNav() {
        this.setState(prevState => {
            return { 
                mobileNav: !prevState.mobileNav,
            }
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <Backdrop visible={this.state.mobileNav} toggleMobileNav={this.toggleMobileNav} />
                <Header visible={this.state.mobileNav} toggleMobileNav={this.toggleMobileNav} />
                <MobileNav visibile={this.state.mobileNav} toggleMobileNav={this.toggleMobileNav} />
                <main className="main">
                    <Switch>
                        <Route exact path="/" component={RecipesPage} />
                        <Route exact path="/recipes/:id" component={RecipePage} />
                        <Route exact path="/add" component={AddRecipePage} />
                        <Route exact path="/edit" component={EditRecipePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withRouter(App);