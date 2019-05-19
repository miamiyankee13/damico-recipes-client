import React from 'react';

export default class Recipe extends React.Component {
    render() {
        return (
            <article className="recipe">
                <h2 className="recipe__title">{this.props.recipeTitle}</h2>
                <h3 className="recipe__meal">{this.props.recipeMeal}</h3>
                <h3 className="recipe__type">{this.props.recipeType}</h3>
            </article>
        );
    }
}