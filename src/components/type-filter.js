import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, fetchRecipesByType } from '../actions/recipes';
import TypeOptions from './type-options';
import './styles/filter.css';

export class TypeFilter extends React.Component {
    state = {
        typeVal: ''
    };

    //track type value
    handleTypeChange = event => {
        this.setState({
            typeVal: event.target.value
        });
    }

    //dispatch fetch recipes/fetch recipes by type async action, disable/enable filter, & scroll to top
    handleSubmit = event => {
        event.preventDefault();
        const type = this.state.typeVal;
        if (type === 'all') {
            this.props.dispatch(fetchRecipes()).then(() => {
                this.props.disableFiltered();
            });
            window.scrollTo(0,0);
        } else {
            this.props.dispatch(fetchRecipesByType(type)).then(() => {
                this.props.enableFiltered(type);
            });
            window.scrollTo(0,0);
        }
    }

    render() {
        return (
            <form className="filter__form" onSubmit={this.handleSubmit}>
                <label htmlFor="filter__type">filter by type</label>
                <select 
                    id="filter__type" 
                    name="filter__type" 
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