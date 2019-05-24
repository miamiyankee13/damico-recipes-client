import React from 'react';
import { connect } from 'react-redux';
import Recipe from './recipe';
import { fetchSingleRecipe, clearSingleRecipe} from '../actions/recipes';

export class RecipePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchSingleRecipe(this.props.match.params.id));
    }

    componentWillUnmount() {
        this.props.dispatch(clearSingleRecipe());
    }
    
    render() {
        if (this.props.error) {
            return <p>{this.props.error}</p>
        }
        
        if (this.props.lodaing || !this.props.currentRecipe) {
            return <p>Loading...</p>
        }
        
        const recipeSides = this.props.currentRecipe.sides.map((side, index) => {
            return <li key={`side-${index}`}>{side}</li>;
        });
        
        const recipeIngredients = this.props.currentRecipe.ingredients.map((ingredient, index) => {
            return <li key={`ing-${index}`}>{ingredient}</li>;
        });

        const recipeInstructions = this.props.currentRecipe.instructions.map((instruction, index) => {
            return <li key={`ins-${index}`}>{instruction}</li>;
        });

        return (
            <section className="recipe">
                <Recipe 
                    recipeTitle={this.props.currentRecipe.name}
                    sides={recipeSides}
                    ingredients={recipeIngredients}
                    instructions={recipeInstructions}
                />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading,
    error: state.error,
    currentRecipe: state.currentRecipe
});

export default connect(mapStateToProps)(RecipePage);