import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, clearFeedback } from '../actions/recipes';
import Loading from './loading';
import EditRecipeForm from './edit-recipe-form';
import './styles/edit-recipe-page.css';

export class EditRecipePage extends React.Component {
    //fetch recipes
    componentDidMount() {
        this.props.dispatch(fetchRecipes());
    }

    //clear feedback
    componentWillUnmount() {
        this.props.dispatch(clearFeedback());
    }
    
    render() {
        //display loading spinner if loading is true or recipes doesn't exist
        if (this.props.loading || !this.props.recipes) {
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
            <section className="edit-recipe">
                <h2 className="edit-recipe__title">edit an existing recipe</h2>
                {message}
                <EditRecipeForm />
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

export default connect(mapStateToProps)(EditRecipePage);