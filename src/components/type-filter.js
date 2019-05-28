import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, fetchRecipesByType } from '../actions/recipes';
import TypeOptions from './type-options';
import './styles/filter.css';

export class TypeFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeVal: ''
        };

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTypeChange(event) {
        this.setState({
            typeVal: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const type = this.state.typeVal;
        if (type === 'all') {
            this.props.dispatch(fetchRecipes());
        } else {
            this.props.dispatch(fetchRecipesByType(type));
        }
    }

    render() {
        return (
            <form className="filter-form" onSubmit={this.handleSubmit}>
                <label htmlFor="type">filter by type</label>
                <select 
                    id="type" 
                    name="type" 
                    value={this.state.typeVal} 
                    onChange={this.handleTypeChange}
                    required
                >
                    <option value=''>--Select Type--</option>
                    <option value='all'>All</option>
                    <TypeOptions />
                </select>
                <button type="submit">filter</button>
            </form>
        );
    }
}

export default connect()(TypeFilter);