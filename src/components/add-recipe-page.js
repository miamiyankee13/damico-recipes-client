import React from 'react';
import { connect } from 'react-redux';
import { clearFeedback } from '../actions/recipes';
import Loading from './loading';
import AddRecipeForm from './add-recipe-form';
import './styles/add-recipe-page.css';

export class AddRecipePage extends React.Component {
    //clear feedback
    componentWillUnmount() {
        this.props.dispatch(clearFeedback());
    }

    render() {
        //display loading spinner if loading is true
        if (this.props.loading) {
            return <Loading />
        }
    
        //display error message if exists
        //display feedback message if exists
        let message = null;
        if (this.props.error) {
            message = <p className="error">{this.props.error}</p>;
        }
        if (this.props.feedback) {
            message = <p className="success">{this.props.feedback}</p>;
        }

        return (
            <section className="add-recipe">
                <h2 className="add-recipe__title">add a recipe to our collection</h2>
                {message}
                <AddRecipeForm />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    recipes: state.recipes,
    error: state.error,
    feedback: state.feedback
});

export default connect(mapStateToProps)(AddRecipePage);