import React from 'react';

export default class RecipesItem extends React.Component {
    render() {
        return (
            <article className="recipes__item">
                <h2 className="recipes__item--title">{this.props.recipeTitle}</h2>
                <h3 className="recipes__item--meal">{this.props.recipeMeal}</h3>
                <h3 className="recipes__item--type">{this.props.recipeType}</h3>
                <button 
                    className="button" 
                    data-index={this.props.index} 
                    onClick={this.props.onClick}
                >
                View Recipe
                </button>
            </article>
        );
    }
}