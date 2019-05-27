import React from 'react';
import { connect } from 'react-redux';
import Loading from './loading';
import AddRecipeForm from './add-recipe-form';

export class AddRecipePage extends React.Component {
    render() {
        if (this.props.lodaing) {
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
                {message}
                <AddRecipeForm />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    error: state.error,
    feedback: state.feedback
});

export default connect(mapStateToProps)(AddRecipePage);