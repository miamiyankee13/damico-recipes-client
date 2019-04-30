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
    CREATE_RECIPE_REQUEST,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE_ERROR,
    EDIT_RECIPE_REQUEST,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_ERROR,
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
    fetchRecipesByMeal,
    createRecipeRequest,
    createRecipeSuccess,
    createRecipeError,
    createRecipe,
    editRecipeRequest,
    editRecipeSuccess,
    editRecipeError,
    editRecipe
    
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

    describe('createRecipeRequest', function() {
        it('Should return the action', function() {
            const action = createRecipeRequest();
            expect(action.type).toEqual(CREATE_RECIPE_REQUEST);
        });
    });

    describe('createRecipeSuccess', function() {
        it('Should return the action', function() {
            const action = createRecipeSuccess();
            expect(action.type).toEqual(CREATE_RECIPE_SUCCESS);
        });
    });

    describe('createRecipeError', function() {
        it('Should return the action', function() {
            const error = 'Bad request';
            const action = createRecipeError(error);
            expect(action.type).toEqual(CREATE_RECIPE_ERROR);
            expect(action.error).toEqual(error);
        });
    });

    describe('editRecipeRequest', function() {
        it('Should return the action', function() {
            const action = editRecipeRequest();
            expect(action.type).toEqual(EDIT_RECIPE_REQUEST)
        });
    });

    describe('editRecipeSuccess', function() {
        it('Should return the action', function() {
            const action = editRecipeSuccess();
            expect(action.type).toEqual(EDIT_RECIPE_SUCCESS)
        });
    });

    describe('editRecipeError', function() {
        it('Should return the action', function() {
            const error = 'Bad request'
            const action = editRecipeError(error);
            expect(action.type).toEqual(EDIT_RECIPE_ERROR);
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

    describe('createRecipe', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                recipe: {}
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();
            const name = 'recipe';
            const ingredients = ['ing1, ing2'];
            const instructions = ['inst1', 'inst2'];
            const sides = ['side1', 'side2'];
            const meal = 'meal';
            const type = 'type';

            return createRecipe(name, ingredients, instructions, sides, meal, type)(dispatch)
                    .then(function() {
                        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/recipes`, {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify({
                                name,
                                ingredients,
                                instructions,
                                sides,
                                meal,
                                type
                            })
                        });
                        expect(dispatch).toHaveBeenCalledWith(createRecipeRequest());
                        expect(dispatch).toHaveBeenCalledWith(createRecipeSuccess());
                    });
        });
    });

    describe('editRecipe', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                recipe: {}
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();
            const id = 'h2h123h8sadw'
            const name = 'recipe';
            const ingredients = ['ing1, ing2'];
            const instructions = ['inst1', 'inst2'];
            const sides = ['side1', 'side2'];
            const meal = 'meal';
            const type = 'type';

            return editRecipe(id, name, ingredients, instructions, sides, meal, type)(dispatch)
                    .then(function() {
                        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/recipes/${id}`, {
                            method: 'PUT',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify({
                                id,
                                name,
                                ingredients,
                                instructions,
                                sides,
                                meal,
                                type
                            })
                        });
                        expect(dispatch).toHaveBeenCalledWith(editRecipeRequest());
                        expect(dispatch).toHaveBeenCalledWith(editRecipeSuccess());
                    });
        });
    });
});