import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipes';
import Loading from './loading';
import EditRecipeForm from './edit-recipe-form';
import './styles/edit-recipe-page.css';

export class EditRecipePage extends React.Component {
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