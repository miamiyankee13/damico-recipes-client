import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipes';
import Loading from './loading';
import AddRecipeForm from './add-recipe-form';
import './styles/add-recipe-page.css';

export class AddRecipePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchRecipes());
    }

    render() {
        if (this.props.loading || !this.props.recipes) {
            return <Loading />
        }
    
        let message;
        if (this.props.feedback) {
            switch(this.props.feedback.success) {
                case true:
                    message = <p className="success">{this.props.feedback.message}</p>;
                    break;
                case false:
                    message = <p className="error">{this.props.feedback.message}</p>;
                    break;
                default:
                    message = '';
            }
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