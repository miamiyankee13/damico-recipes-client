import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, fetchRecipesByMeal } from '../actions/recipes';
import MealOptions from './meal-options';
import './styles/filter.css';

export class MealFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealVal: ''
        };

        this.handleMealChange = this.handleMealChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMealChange(event) {
        this.setState({
            mealVal: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const meal = this.state.mealVal;
        if (meal === 'all') {
            this.props.dispatch(fetchRecipes()).then(() => {
                this.setState({ mealVal: '' });
                this.props.disableFiltered();
            });
        } else {
            this.props.dispatch(fetchRecipesByMeal(meal)).then(() => {
                this.setState({ mealVal: '' });
                this.props.enableFiltered(meal);
            });
        }
    }

    render() {
        return (
            <form className="filter__form" onSubmit={this.handleSubmit}>
                <label htmlFor="filter__meal">filter by meal</label>
                <select 
                    id="filter__meal" 
                    name="filter__meal" 
                    value={this.state.mealVal} 
                    onChange={this.handleMealChange}
                    required
                >
                    <option value=''>--Select Meal--</option>
                    <option value='all'>All</option>
                    <MealOptions />
                </select>
                <button type="submit">filter</button>
            </form>
        );
    }
}

export default connect()(MealFilter);