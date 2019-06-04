import React from 'react';
import './styles/recipes-item.css';

const RecipesItem = props => {
    return (
        <button className="recipes__item" onClick={props.onClick} data-index={props.index}>
            <article>
                <h2 className="recipes__item--title" >{props.recipeTitle}</h2>
                <p className="recipes__item--type">{props.recipeType}</p>
                <hr />
                <p className="recipes__item--meal">{props.recipeMeal}</p>
            </article>
        </button>
    );
}

export default RecipesItem;