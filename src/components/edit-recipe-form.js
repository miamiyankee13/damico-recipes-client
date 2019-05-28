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
        this.props.dispatch(editRecipe(recipe._id, name, ingredients, instructions, sides, meal, type)).then(() => {
            this.setState({ 
                recipeVal: '',
                nameVal: '',
                ingredientsVal: '',
                instructionsVal: '',
                sidesVal: '',
                mealVal: '',
                typeVal: ''
            });
        });;
        window.scrollTo(0,0);
    }

    render() {
        return (
            <form className="edit-recipe__form" onSubmit={this.handleSubmit}>
                <label htmlFor="edit-recipe__recipe">recipe</label>
                <select 
                    id="edit-recipe__recipe" 
                    name="edit-recipe__recipe" 
                    value={this.state.recipeVal} 
                    onChange={this.handleRecipeChange}
                    required
                >
                    <option value=''>--Select Recipe--</option>
                    <RecipeOptions />
                </select>
                <label htmlFor="edit-recipe__name">name</label>
                <input 
                    type="text" 
                    id="edit-recipe__name" 
                    name="edit-recipe__name" 
                    value={this.state.nameVal} 
                    onChange={this.handleNameChange}
                    placeholder="name"
                    required
                />
                <label htmlFor="edit-recipe__ingredients">ingredients</label>
                <input 
                    type="text" 
                    id="edit-recipe__ingredients" 
                    name="edit-recipe__ingredients" 
                    value={this.state.ingredientsVal} 
                    onChange={this.handleIngredientsChange}
                    placeholder="ingredient, ingredient"
                    required
                />
                <label htmlFor="edit-recipe__instructions">instructions</label>
                <input 
                    type="text" 
                    id="edit-recipe__instructions" 
                    name="edit-recipe__instructions" 
                    value={this.state.instructionsVal} 
                    onChange={this.handleInstructionsChange}
                    placeholder="instruction, instruction"
                    required
                />
                <label htmlFor="edit-recipe__sides">sides</label>
                <input 
                    type="text" 
                    id="edit-recipe__sides" 
                    name="edit-recipe__sides" 
                    value={this.state.sidesVal} 
                    onChange={this.handleSidesChange}
                    placeholder="side, side"
                    required
                />
                <label htmlFor="edit-recipe__meal">meal</label>
                <select 
                    id="edit-recipe__meal" 
                    name="edit-recipe__meal" 
                    value={this.state.mealVal} 
                    onChange={this.handleMealChange}
                    required
                >
                    <option value=''>--Select Meal--</option>
                    <MealOptions />
                </select>
                <label htmlFor="edit-recipe__type">type</label>
                <select 
                    id="edit-recipe__type" 
                    name="edit-recipe__type" 
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