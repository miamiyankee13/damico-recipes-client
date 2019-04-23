//import modules
import { API_BASE_URL } from '../../config';
import { 
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_ERROR,
    FETCH_SINGLE_RECIPE_REQUEST,
    FETCH_SINGLE_RECIPE_SUCCESS,
    FETCH_SINGLE_RECIPE_ERROR,
    CLEAR_SINGLE_RECIPE,
    FETCH_RECIPES_BY_MEAL_REQUEST,
    FETCH_RECIPES_BY_MEAL_SUCCESS,
    FETCH_RECIPES_BY_MEAL_ERROR,
    fetchRecipesRequest,
    fetchRecipesSuccess,
    fetchRecipesError,
    fetchRecipes,
    fetchSingleRecipeRequest,
    fetchSingleRecipeSuccess,
    fetchSingleRecipeError,
    clearSingleRecipe,
    fetchSingleRecipe,
    fetchRecipesByMealRequest,
    fetchRecipesByMealSuccess,
    fetchRecipesByMealError,
    fetchRecipesByMeal
} from '../recipes';

describe('Action Creators', function() {
    describe('fetchRecipesRequest', function() {
        it('Should return the action', function() {
            const action = fetchRecipesRequest();
            expect(action.type).toEqual(FETCH_RECIPES_REQUEST);
        });
    });
    
    describe('fetchRecipesSuccess', function() {
        it('Should return the action', function() {
            const recipes = ['Recipe 1', 'Recipe 2'];
            const action = fetchRecipesSuccess(recipes);
            expect(action.type).toEqual(FETCH_RECIPES_SUCCESS);
            expect(action.data).toEqual(recipes);
        });
    });
    
    describe('fetchRecipesError', function() {
        it('Should return the action', function() {
            const error ='Bad request';
            const action = fetchRecipesError(error);
            expect(action.type).toEqual(FETCH_RECIPES_ERROR);
            expect(action.error).toEqual(error);
        });
    });

    describe('fetchSingleRecipeRequest', function() {
        it('Should return the action', function() {
            const action = fetchSingleRecipeRequest();
            expect(action.type).toEqual(FETCH_SINGLE_RECIPE_REQUEST);
        });
    });

    describe('fetchSingleRecipeSuccess', function() {
        it('Should return the action', function() {
            const recipe = { name: 'Chicken' };
            const action = fetchSingleRecipeSuccess(recipe);
            expect(action.type).toEqual(FETCH_SINGLE_RECIPE_SUCCESS);
            expect(action.data).toEqual(recipe);
        });
    });

    describe('fetchSingleRecipeError', function() {
        it('Should return the action', function() {
            const error = 'Bad request';
            const action = fetchSingleRecipeError(error);
            expect(action.type).toEqual(FETCH_SINGLE_RECIPE_ERROR);
            expect(action.error).toEqual(error);
        });
    });

    describe('clearSingleRecipe', function() {
        it('Should return the action', function() {
            const action = clearSingleRecipe();
            expect(action.type).toEqual(CLEAR_SINGLE_RECIPE);
        })
    });

    describe('fetchRecipesByMealRequest', function() {
        it('Should return the action', function() {
            const action = fetchRecipesByMealRequest();
            expect(action.type).toEqual(FETCH_RECIPES_BY_MEAL_REQUEST);
        });
    });

    describe('fetchRecipesByMealSuccess', function() {
        it('Should return the action', function() {
            const recipes = ['Recipe 1', 'Recipe 2'];
            const action = fetchRecipesByMealSuccess(recipes);
            expect(action.type).toEqual(FETCH_RECIPES_BY_MEAL_SUCCESS);
            expect(action.data).toEqual(recipes);
        });
    });

    describe('fetchRecipesByMealError', function() {
        it('Should return the action', function() {
            const error = 'Bad request';
            const action = fetchRecipesByMealError(error);
            expect(action.type).toEqual(FETCH_RECIPES_BY_MEAL_ERROR);
            expect(action.error).toEqual(error);
        });
    });
});

describe('Async Actions', function() {
    describe('fetchRecipes', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                recipes: ['Recipe 1', 'Recipe 2']
            };
    
            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );
    
            const dispatch = jest.fn();
    
            return fetchRecipes()(dispatch)
                    .then(function() {
                        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/recipes`, {
                            method: 'GET'
                        });
                        expect(dispatch).toHaveBeenCalledWith(fetchRecipesRequest());
                        expect(dispatch).toHaveBeenCalledWith(fetchRecipesSuccess(data));
                    });
        });
    });

    describe('fetchSingleRecipe', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                recipe: { name: 'Chicken' }
            };

            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();
            const id = '7321832174';

            return fetchSingleRecipe(id)(dispatch)
                    .then(function() {
                        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/recipes/${id}`, {
                            method: 'GET'
                        });
                        expect(dispatch).toHaveBeenCalledWith(fetchSingleRecipeRequest());
                        expect(dispatch).toHaveBeenCalledWith(fetchSingleRecipeSuccess(data));
                    });
        });
    });

    describe('fetchRecipesByMeal', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                recipes: ['Recipe 1', 'Recipe 2']
            };

            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();
            const meal = 'Breakfast'

            return fetchRecipesByMeal(meal)(dispatch)
                    .then(function() {
                        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/recipes/meals/${meal}`, {
                            method: 'GET'
                        });
                        expect(dispatch).toHaveBeenCalledWith(fetchRecipesByMealRequest());
                        expect(dispatch).toHaveBeenCalledWith(fetchRecipesByMealSuccess(data));
                    })
        });
    });
});