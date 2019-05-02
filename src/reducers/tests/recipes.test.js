import recipesReducer from '../recipes';

describe('Recipes Reducer', function() {
    const initialState = {
        recipes: [],
        currentRecipe: null,
        loading: false,
        feedback: null,
        error: null
    }

    const mockData = {
        recipes: ['Recipe 1', 'Recipe 2'],
        currentRecipe: { name: 'Recipe 1'},
        error: { message: 'Bad request' }
    }

    it('Should set the initial state when nothing is passed in', function() {
        const state = recipesReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual(initialState);
    });

    it('Should return the current stae on an unknown action', function() {
        const currentState = {};
        const state = recipesReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toEqual(currentState);
    });

});