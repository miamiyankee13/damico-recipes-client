import React from 'react';
import './styles/recipe.css';

export default class Recipe extends React.Component {
    render() {
        return (
            <React.Fragment>
                <article className="recipe__left">
                    <h2 className="recipe__title">{this.props.recipeTitle}</h2>
                    <h3 className="recipe__heading">ingredients</h3>
                    <ul className="recipe__ingredients">
                        {this.props.ingredients}
                    </ul>
                </article>
                <article className="recipe__right">
                    <h3 className="recipe__heading">instructions</h3>
                    <ol className="recipe__instructions">
                        {this.props.instructions}
                    </ol>
                    <h3 className="recipe__heading">sides</h3>
                    <ul className="recipe__sides">
                        {this.props.sides}
                    </ul>
                </article>
            </React.Fragment>
        );
    }
}