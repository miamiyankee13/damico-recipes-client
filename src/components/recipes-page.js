import React from 'react';
import RecipesItem from './recipes-item';

export default class RecipesPage extends React.Component {
    render() {
        return (
            <section className="recipes">
                <RecipesItem recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <RecipesItem recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <RecipesItem recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <RecipesItem recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <RecipesItem recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
                <RecipesItem recipeTitle="Recipe Title" recipeMeal="Recipe Meal" recipeType="Recipe Type"/>
            </section>
        );
    }
}