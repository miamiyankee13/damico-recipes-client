import React from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipes';
import MealOptions from './meal-options';
import TypeOptions from './type-options';
import './styles/add-recipe-form.css';

export class AddRecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameVal: '',
            ingredientsVal: '',
            instructionsVal: '',
            sidesVal: '',
            mealVal: '',
            typeVal: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
        this.handleInstructionsChange = this.handleInstructionsChange.bind(this);
        this.handleSidesChange = this.handleSidesChange.bind(this);
        this.handleMealChange = this.handleMealChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            nameVal: event.target.value
        });
    }

    handleIngredientsChange(event) {
        this.setState({
            ingredientsVal: event.target.value
        });
    }

    handleInstructionsChange(event) {
        this.setState({
            instructionsVal: event.target.value
        });
    }

    handleSidesChange(event) {
        this.setState({
            sidesVal: event.target.value
        });
    }

    handleMealChange(event) {
        this.setState({
            mealVal: event.target.value
        });
    }

    handleTypeChange(event) {
        this.setState({
            typeVal: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.nameVal;
        const ingredients = this.state.ingredientsVal.split(",").map(item => item.trim());
        const instructions = this.state.instructionsVal.split(",").map(item => item.trim());
        const sides = this.state.sidesVal.split(",").map(item => item.trim());
        const meal = this.state.mealVal;
        const type = this.state.typeVal;
        this.props.dispatch(createRecipe(name, ingredients, instructions, sides, meal, type));
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.nameVal} 
                    onChange={this.handleNameChange}
                    placeholder="name"
                    required
                />
                <label htmlFor="ingredients">Ingredients</label>
                <input 
                    type="text" 
                    id="ingredients" 
                    name="ingredients" 
                    value={this.state.ingredientsVal} 
                    onChange={this.handleIngredientsChange}
                    placeholder="ingredient,ingredient"
                    required
                />
                <label htmlFor="instructions">Instructions</label>
                <input 
                    type="text" 
                    id="instructions" 
                    name="instructions" 
                    value={this.state.instructionsVal} 
                    onChange={this.handleInstructionsChange}
                    placeholder="instruction,instruction"
                    required
                />
                <label htmlFor="sides">Sides</label>
                <input 
                    type="text" 
                    id="sides" 
                    name="sides" 
                    value={this.state.sidesVal} 
                    onChange={this.handleSidesChange}
                    placeholder="side,side"
                    required
                />
                <label htmlFor="meal">Meal</label>
                <select 
                    id="meal" 
                    name="meal" 
                    value={this.state.mealVal} 
                    onChange={this.handleMealChange}
                >
                    <option value=''>--Select Meal--</option>
                    <MealOptions />
                </select>
                <label htmlFor="type">Type</label>
                <select 
                    id="type" 
                    name="type" 
                    value={this.state.typeVal} 
                    onChange={this.handleTypeChange}
                >
                    <option value=''>--Select Type--</option>
                    <TypeOptions />
                </select>
                <button type="submit">Add Recipe</button>
            </form>
        );
    }
}

export default connect()(AddRecipeForm);