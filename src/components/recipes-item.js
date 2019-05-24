import React from 'react';

export default class RecipesItem extends React.Component {
    render() {
        return (
            <article 
                className="recipes__item" 
                data-index={this.props.index} 
                onClick={this.props.onClick}
            >
                <h2 className="recipes__item--title" >{this.props.recipeTitle}</h2>
                <h3 className="recipes__item--heading">Meal</h3>
                <p className="recipes__item--meal">{this.props.recipeMeal}</p>
                <h3 className="recipes__item--heading">Type</h3>
                <p className="recipes__item--type">{this.props.recipeType}</p>
            </article>
        );
    }
}