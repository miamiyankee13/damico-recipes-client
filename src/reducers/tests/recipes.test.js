import recipesReducer from '../recipes';
import {
    fetchRecipesRequest,
    fetchRecipesSuccess,
    fetchRecipesError,
    fetchSingleRecipeRequest,
    fetchSingleRecipeSuccess,
    fetchSingleRecipeError,
    clearSingleRecipe,
    fetchRecipesByMealRequest,
    fetchRecipesByMealSuccess,
    fetchRecipesByMealError,
    fetchRecipesByTypeRequest,
    fetchRecipesByTypeSuccess,
    fetchRecipesByTypeError,
    createRecipeRequest,
    createRecipeSuccess,
    createRecipeError,
    editRecipeRequest,
    editRecipeSuccess,
    editRecipeError,
    clearFeedback
} from '../../actions/recipes';

describe('Recipes Reducer', function() {
    const initialState = {
        recipes: null,
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
                recipes: null,
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
                recipes: null,
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
                recipes: null,
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
                recipes: null,
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
                recipes: null,
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
                recipes: null,
                currentRecipe: mockData.currentRecipe,
                loading: false,
                feedback: null,
                error: null
            };
            const state = recipesReducer(currentState, clearSingleRecipe());
            expect(state).toEqual(initialState);
        });
    });
    
    describe('fetchRecipesByMealRequest', function() {
        it('Should make request', function() {
            const state = recipesReducer(initialState, fetchRecipesByMealRequest());
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: true,
                feedback: null,
                error: null 
            });
        });
    });

    describe('fetchRecipesByMealSuccess', function() {
        it('Should set recipes', function() {
            const data = { recipes: mockData.recipes };
            const state = recipesReducer(initialState, fetchRecipesByMealSuccess(data));
            expect(state).toEqual({
                recipes: mockData.recipes,
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: null 
            });
        });
    });

    describe('fetchRecipesByMealError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = recipesReducer(initialState, fetchRecipesByMealError(error));
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: mockData.error.message 
            });
        });
    });

    describe('fetchRecipesByTypeRequest', function() {
        it('Should make request', function() {
            const state = recipesReducer(initialState, fetchRecipesByTypeRequest());
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: true,
                feedback: null,
                error: null 
            });
        });
    });

    describe('fetchRecipesByTypeSuccess', function() {
        it('Should set recipes', function() {
            const data = { recipes: mockData.recipes };
            const state = recipesReducer(initialState, fetchRecipesByTypeSuccess(data));
            expect(state).toEqual({
                recipes: mockData.recipes,
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: null 
            });
        });
    });

    describe('fetchRecipesByTypeError', function() {
        it('Should set error', function() {
            const error = mockData.error;
            const state = recipesReducer(initialState, fetchRecipesByTypeError(error));
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: mockData.error.message 
            });
        });
    });

    describe('createRecipeRequest', function() {
        it('Should make request', function() {
            const state = recipesReducer(initialState, createRecipeRequest());
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: true,
                feedback: null,
                error: null 
            });
        });
    });

    describe('createRecipeSuccess', function() {
        it('Should set feedback', function() {
            const state = recipesReducer(initialState, createRecipeSuccess());
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: false,
                feedback: 'Recipe added!',
                error: null 
            });
        });
    });

    describe('createRecipeError', function() {
        it('Should set error & feedback', function() {
            const error = mockData.error;
            const state = recipesReducer(initialState, createRecipeError(error));
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('editRecipeRequest', function() {
        it('Should make request', function() {
            const state = recipesReducer(initialState, editRecipeRequest());
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: true,
                feedback: null,
                error: null 
            });
        });
    });

    describe('editRecipeSuccess', function() {
        it('Should set feedback', function() {
            const state = recipesReducer(initialState, editRecipeSuccess());
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: false,
                feedback: 'Recipe updated!',
                error: null 
            });
        });
    });

    describe('editRecipeError', function() {
        it('Should set error & feedback', function() {
            const error = mockData.error;
            const state = recipesReducer(initialState, editRecipeError(error));
            expect(state).toEqual({
                recipes: null,
                currentRecipe: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('clearFeedback', function() {
        it('Should reset feedback', function() {
            const currentState = {
                recipes: null,
                currentRecipe: null,
                loading: false,
                feedback: { success: false, message: mockData.error.message},
                error: null
            };
            const state = recipesReducer(currentState, clearFeedback());
            expect(state).toEqual(initialState);
        });
    });
});