import React from 'react';

const RecipeOptions = props => {
    
    //create list of recipe options
    const recipeOptions = props.recipes.map((recipe, index) => {
        return <option key={`recipe-${index}`} value={index}>{recipe.name}</option>;
    });

    return recipeOptions;
}

export default RecipeOptions;