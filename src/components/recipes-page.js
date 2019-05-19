import React from 'react';
import Recipe from './recipe';

export default class RecipesPage extends React.Component {
    render() {
        return (
            <section id="recipes">
                <Recipe recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <Recipe recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <Recipe recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <Recipe recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <Recipe recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <Recipe recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
            </section>
        );
    }
}