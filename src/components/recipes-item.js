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
                <p className="recipes__item--type">{this.props.recipeType}</p>
                <hr />
                <p className="recipes__item--meal">{this.props.recipeMeal}</p>
            </article>
        );
    }
}