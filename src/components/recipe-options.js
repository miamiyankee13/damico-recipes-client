import React from 'react';
import { connect } from 'react-redux';

export class RecipeOptions extends React.Component {
    render() {
        const recipeOptions = this.props.recipes.map((recipe, index) => {
            return <option key={`recipe-${index}`} value={index}>{recipe.name}</option>;
        });

        return recipeOptions;
    }
}

const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect(mapStateToProps)(RecipeOptions);