import React from 'react';
import { connect } from 'react-redux';
import RecipesItem from './recipes-item';
import Loading from './loading';
import MealFilter from './meal-filter';
import TypeFilter from './type-filter';
import { fetchRecipes } from '../actions/recipes';
import './styles/recipes-page.css';

export class RecipesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: false,
            filter: ''
        }

        this.viewRecipe = this.viewRecipe.bind(this);
        this.enableFiltered = this.enableFiltered.bind(this);
        this.disableFiltered = this.disableFiltered.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch(fetchRecipes());
    }

    viewRecipe(event) {
        const index = event.currentTarget.getAttribute('data-index');
        const recipe = this.props.recipes[index];
        this.props.history.push(`/recipes/${recipe._id}`);
    }

    enableFiltered(filter) {
        this.setState({
            filtered: true,
            filter
        });
    }

    disableFiltered() {
        this.setState({
            filtered: false,
            filter: ''
        });
    }
    
    render() {
        if (this.props.error) {
            return <p className="error">{this.props.error}</p>
        }

        if (this.props.lodaing) {
            return <Loading />
        }

        let message = '';
        if  (this.props.recipes.length <= 0) {
            message= <p className="filter-message">there are no recipes matching the entered criteria</p>;
        }

        const recipes = this.props.recipes.map((recipe, index) => {
            return <RecipesItem 
                        key={`recipe-${index}`} 
                        index={index} 
                        recipeTitle={recipe.name} 
                        recipeMeal={recipe.meal} 
                        recipeType={recipe.type}
                        onClick={this.viewRecipe}
                    />
        });
        
        return (
            <React.Fragment>
                <section className="banner"></section>
                <h2 className="filter-message">{this.state.filtered ? `filtered by ${this.state.filter}` : 'all recipes'}</h2>
                <section className="recipes">
                    {recipes}
                    {message}
                </section>
                <section className="filters">
                    <div>
                        <MealFilter 
                            filtered={this.state.filtered}
                            enableFiltered={this.enableFiltered}
                            disableFiltered={this.disableFiltered} 
                        />
                    </div>
                    <div>
                        <TypeFilter 
                            filtered={this.state.filtered}
                            enableFiltered={this.enableFiltered}
                            disableFiltered={this.disableFiltered} 
                        />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    error: state.error,
    recipes: state.recipes
});

export default connect(mapStateToProps)(RecipesPage);