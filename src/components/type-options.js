import React from 'react';

const TypeOptions = () => {
    const typeOptionsArray = ['Beef', 'Chicken', 'Eggs', 'Fruit', 'Pancakes', 'Pasta', 'Pizza', 'Pork', 'Sandwiches', 'Vegetables'];
        
    const typeOptions = typeOptionsArray.map((type, index) => {
        const typeVal = type.toLocaleLowerCase()
        return <option key={`type-${index}`} value={typeVal}>{type}</option>
    });
    
    return typeOptions;
}

export default TypeOptions;