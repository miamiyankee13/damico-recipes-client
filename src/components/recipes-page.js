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

        this.viewRecipe = this.viewRecipe.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch(fetchRecipes());
    }

    viewRecipe(event) {
        const index = event.currentTarget.getAttribute('data-index');
        const recipe = this.props.recipes[index];
        this.props.history.push(`/recipes/${recipe._id}`);
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
                <section className="filters">
                    <div>
                        <MealFilter />
                    </div>
                    <div>
                        <TypeFilter />
                    </div>
                </section>
                <section className="recipes">
                    {recipes}
                    {message}
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