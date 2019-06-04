import React from 'react';
import './styles/recipe.css';

const Recipe = props => {
    return (
        <React.Fragment>
            <article className="recipe__left">
                <h2 className="recipe__title">{props.recipeTitle}</h2>
                <h3 className="recipe__heading">ingredients</h3>
                <ul className="recipe__ingredients">
                    {props.ingredients}
                </ul>
            </article>
            <article className="recipe__right">
                <h3 className="recipe__heading">instructions</h3>
                <ol className="recipe__instructions">
                    {props.instructions}
                </ol>
                <h3 className="recipe__heading">sides</h3>
                <ul className="recipe__sides">
                    {props.sides}
                </ul>
            </article>
        </React.Fragment>
    );
}

export default Recipe