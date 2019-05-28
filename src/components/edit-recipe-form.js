import React from 'react';
import { connect } from 'react-redux';
import { editRecipe } from '../actions/recipes';
import RecipeOptions from './recipe-options';
import MealOptions from './meal-options';
import TypeOptions from './type-options';
import './styles/edit-recipe-form.css';

export class EditRecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeVal: '',
            nameVal: '',
            ingredientsVal: '',
            instructionsVal: '',
            sidesVal: '',
            mealVal: '',
            typeVal: ''
        };

        this.handleRecipeChange = this.handleRecipeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
        this.handleInstructionsChange = this.handleInstructionsChange.bind(this);
        this.handleSidesChange = this.handleSidesChange.bind(this);
        this.handleMealChange = this.handleMealChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRecipeChange(event) {
        this.setState({
            recipeVal: event.target.value
        });
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
        const index = this.state.recipeVal;
        const recipe = this.props.recipes[index];
        const name = this.state.nameVal;
        const ingredients = this.state.ingredientsVal.split(",").map(item => item.trim());
        const instructions = this.state.instructionsVal.split(",").map(item => item.trim());
        const sides = this.state.sidesVal.split(",").map(item => item.trim());
        const meal = this.state.mealVal;
        const type = this.state.typeVal;
        this.props.dispatch(editRecipe(recipe._id, name, ingredients, instructions, sides, meal, type));
        window.scrollTo(0,0);
    }

    render() {
        return (
            <form className="edit-form" onSubmit={this.handleSubmit}>
                <label htmlFor="recipe">recipe</label>
                <select 
                    id="recipe" 
                    name="recipe" 
                    value={this.state.recipeVal} 
                    onChange={this.handleRecipeChange}
                    required
                >
                    <option value=''>--Select Recipe--</option>
                    <RecipeOptions />
                </select>
                <label htmlFor="name">name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={this.state.nameVal} 
                    onChange={this.handleNameChange}
                    placeholder="name"
                    required
                />
                <label htmlFor="ingredients">ingredients</label>
                <input 
                    type="text" 
                    id="ingredients" 
                    name="ingredients" 
                    value={this.state.ingredientsVal} 
                    onChange={this.handleIngredientsChange}
                    placeholder="ingredient, ingredient"
                    required
                />
                <label htmlFor="instructions">instructions</label>
                <input 
                    type="text" 
                    id="instructions" 
                    name="instructions" 
                    value={this.state.instructionsVal} 
                    onChange={this.handleInstructionsChange}
                    placeholder="instruction, instruction"
                    required
                />
                <label htmlFor="sides">sides</label>
                <input 
                    type="text" 
                    id="sides" 
                    name="sides" 
                    value={this.state.sidesVal} 
                    onChange={this.handleSidesChange}
                    placeholder="side, side"
                    required
                />
                <label htmlFor="meal">meal</label>
                <select 
                    id="meal" 
                    name="meal" 
                    value={this.state.mealVal} 
                    onChange={this.handleMealChange}
                    required
                >
                    <option value=''>--Select Meal--</option>
                    <MealOptions />
                </select>
                <label htmlFor="type">type</label>
                <select 
                    id="type" 
                    name="type" 
                    value={this.state.typeVal} 
                    onChange={this.handleTypeChange}
                    required
                >
                    <option value=''>--Select Type--</option>
                    <TypeOptions />
                </select>
                <button type="submit">edit recipe</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect(mapStateToProps)(EditRecipeForm);