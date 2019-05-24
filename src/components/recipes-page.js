import React from 'react';
import { connect } from 'react-redux';
import RecipesItem from './recipes-item';
import { fetchRecipes } from '../actions/recipes';

export class RecipesPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchRecipes());
    }
    
    render() {
        if (this.props.lodaing || this.props.recipes.length < 0) {
            return <p>Loading...</p>
        }

        if (this.props.error) {
            return <p>{this.props.error}</p>
        }

        const recipes = this.props.recipes.map((recipe, index) => {
            return <RecipesItem 
                        key={`recipe-${index}`} 
                        index={index} recipeTitle={recipe.name} 
                        recipeMeal={recipe.meal} 
                        recipeType={recipe.type}
                    />
        });
        
        return (
            <React.Fragment>
                <section className="banner"></section>
                <section className="recipes">
                    {recipes}
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