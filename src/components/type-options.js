import React from 'react';

export default class TypeOptions extends React.Component {
    render() {
        const typeOptionsArray = ['Beef', 'Cheese', 'Chicken', 'Eggs', 'Fruit', 'Pancakes', 'Pasta', 'Pizza', 'Pork', 'Vegetables'];
        
        const typeOptions = typeOptionsArray.map((type, index) => {
            const typeVal = type.toLocaleLowerCase()
            return <option key={`type-${index}`} value={typeVal}>{type}</option>
        });

        return typeOptions;
    }
}