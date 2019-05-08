import recipesReducer from '../recipes';
import {
    fetchRecipesRequest,
    fetchRecipesSuccess,
    fetchRecipesError,
    fetchSingleRecipeRequest,
    fetchSingleRecipeSuccess,
    fetchSingleRecipeError,
    clearSingleRecipe
} from '../../actions/recipes';

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

    describe('fetchRecipesRequest', function() {
        it('Should make request', function() {
            const state = recipesReducer(initialState, fetchRecipesRequest());
            expect(state).toEqual({
                recipes: [],
                currentRecipe: null,
                loading: true,
                feedback: null,
                error: null 
            });
        });
    });

    describe('fetchRecipesSuccess', function() {
        it('Should set recipes', function() {
            const data = { recipes: mockData.recipes };
            const state = recipesReducer(initialState, fetchRecipesSuccess(data));
            expect(state).toEqual({
                recipes: mockData.recipes,
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: null 
            });
        });
    });

    describe('fetchRecipesError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = recipesReducer(initialState, fetchRecipesError(error));
            expect(state).toEqual({
                recipes: [],
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: mockData.error.message 
            });
        });
    });

    describe('fetchSingleRecipeRequest', function() {
        it('Should make request', function() {
            const state = recipesReducer(initialState, fetchSingleRecipeRequest());
            expect(state).toEqual({
                recipes: [],
                currentRecipe: null,
                loading: true,
                feedback: null,
                error: null 
            });
        });
    });

    describe('fetchSingleRecipeSuccess', function() {
        it('Should set current recipe', function() {
            const data = mockData.currentRecipe;
            const state = recipesReducer(initialState, fetchSingleRecipeSuccess(data));
            expect(state).toEqual({
                recipes: [],
                currentRecipe: mockData.currentRecipe,
                loading: false,
                feedback: null,
                error: null 
            });
        });
    });

    describe('fetchSingleRecipeError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = recipesReducer(initialState, fetchSingleRecipeError(error));
            expect(state).toEqual({
                recipes: [],
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: mockData.error.message 
            });
        });
    });

    describe('clearSingleRecipe', function() {
        it('Should reset current recipe', function() {
            const currentState = {
                recipes: [],
                currentRecipe: mockData.currentRecipe,
                loading: false,
                feedback: null,
                error: null
            };
            const state = recipesReducer(currentState, clearSingleRecipe());
            expect(state).toEqual(initialState);
        });
    });

});