import React from 'react';
import Recipe from './recipe';

export default class RecipePage extends React.Component {
    render() {
        const recipeIngredients = ['Ingredient 1', 'Ingredient 2'].map((ingredient, index) => {
            return <li key={`ing-${index}`}>{ingredient}</li>
        });

        const recipeInstructions = ['Step 1', 'Step 2'].map((instruction, index) => {
            return <li key={`ins-${index}`}>{instruction}</li>
        });

        return (
            <section className="recipe">
                <Recipe 
                    recipeTitle="Recipe Title" 
                    recipeMeal="Recipe Meal" 
                    recipeType="Recipe Type"
                    recipeIngredients={recipeIngredients}
                    recipeInstructions={recipeInstructions}
                />
            </section>
        );
    }
}