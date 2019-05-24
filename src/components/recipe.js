import React from 'react';

export default class Recipe extends React.Component {
    render() {
        return (
            <React.Fragment>
                <article className="recipe__info">
                    <h2 className="recipe__info--title">{this.props.recipeTitle}</h2>
                    <h3 className="recipe__info--heading">Sides</h3>
                    <ul className="recipe__info--sides">
                        {this.props.sides}
                    </ul>
                </article>
                <article className="recipe__details">
                    <h3 className="recipe__details--heading">Ingredients</h3>
                    <ul className="recipe__details--ingredients">
                        {this.props.ingredients}
                    </ul>
                    <h3 className="recipe__details--heading">Instructions</h3>
                    <ol className="recipe__details--instructions">
                        {this.props.instructions}
                    </ol>
                </article>
            </React.Fragment>
        );
    }
}