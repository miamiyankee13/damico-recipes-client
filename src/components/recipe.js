import React from 'react';

export default class Recipe extends React.Component {
    render() {
        return (
            <React.Fragment>
                <article className="recipe__info">
                    <h2 className="recipe__info-title">{this.props.recipeTitle}</h2>
                    <h3 className="recipe__info-meal">{this.props.recipeMeal}</h3>
                    <h3 className="recipe__info-type">{this.props.recipeType}</h3>
                </article>
                <article className="recipe__details">
                    <h3 className="recipe__details-title">Ingredients</h3>
                    <ul className="recipe__details-ingredients">
                        {this.props.recipeIngredients}
                    </ul>
                    <h3 className="recipe__details-title">Instructions</h3>
                    <ol className="recipe__details-instructions">
                        {this.props.recipeInstructions}
                    </ol>
                </article>
            </React.Fragment>
        );
    }
}