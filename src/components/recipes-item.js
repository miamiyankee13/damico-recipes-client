import React from 'react';
import './styles/recipes-item.css';

export default class RecipesItem extends React.Component {
    render() {
        return (
            <button className="recipes__item" onClick={this.props.onClick} data-index={this.props.index}>
                <article>
                    <h2 className="recipes__item--title" >{this.props.recipeTitle}</h2>
                    <p className="recipes__item--type">{this.props.recipeType}</p>
                    <hr />
                    <p className="recipes__item--meal">{this.props.recipeMeal}</p>
                </article>
            </button>
        );
    }
}