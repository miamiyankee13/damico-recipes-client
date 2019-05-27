import React from 'react';

export default class MealOptions extends React.Component {
    render() {
        const mealOptionsArray = ['Breakfast', 'Dessert', 'Dinner', 'Lunch', 'Snack'];

        const mealOptions = mealOptionsArray.map((meal, index) => {
            const mealVal = meal.toLocaleLowerCase()
            return <option key={`meal-${index}`} value={mealVal}>{meal}</option>
        });

        return mealOptions;
    }
}