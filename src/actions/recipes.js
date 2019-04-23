//import modules
import { API_BASE_URL } from '../config';

//create action types & creators
export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const fetchRecipesRequest = () => ({
    type: FETCH_RECIPES_REQUEST
})

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = data => ({
    type: FETCH_RECIPES_SUCCESS,
    data
});

export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';
export const fetchRecipesError = error => ({
    type: FETCH_RECIPES_ERROR,
    error
});

export const FETCH_SINGLE_RECIPE_REQUEST = 'FETCH_SINGLE_RECIPE_REQUEST';
export const fetchSingleRecipeRequest = () => ({
    type: FETCH_SINGLE_RECIPE_REQUEST
});

export const FETCH_SINGLE_RECIPE_SUCCESS = 'FETCH_SINGLE_RECIPE_SUCCESS';
export const fetchSingleRecipeSuccess = data => ({
    type: FETCH_SINGLE_RECIPE_SUCCESS,
    data
});

export const FETCH_SINGLE_RECIPE_ERROR = 'FETCH_SINGLE_RECIPE_ERROR';
export const fetchSingleRecipeError = error => ({
    type: FETCH_SINGLE_RECIPE_ERROR,
    error
});

export const CLEAR_SINGLE_RECIPE = 'CLEAR_SINGLE_RECIPE';
export const clearSingleRecipe = () => ({
    type: CLEAR_SINGLE_RECIPE
});

export const FETCH_RECIPES_BY_MEAL_REQUEST = 'FETCH_RECIPES_BY_MEAL_REQUEST';
export const fetchRecipesByMealRequest = () => ({
    type: FETCH_RECIPES_BY_MEAL_REQUEST
});

export const FETCH_RECIPES_BY_MEAL_SUCCESS = 'FETCH_RECIPES_BY_MEAL_SUCCESS';
export const fetchRecipesByMealSuccess = data => ({
    type: FETCH_RECIPES_BY_MEAL_SUCCESS,
    data
});

export const FETCH_RECIPES_BY_MEAL_ERROR = 'FETCH_RECIPES_BY_MEAL_ERROR';
export const fetchRecipesByMealError = error => ({
    type: FETCH_RECIPES_BY_MEAL_ERROR,
    error
});

//GET - retrieve recipes
export const fetchRecipes = () => dispatch => {
    dispatch(fetchRecipesRequest());
    return fetch(`${API_BASE_URL}/api/recipes`, { 
            method: 'GET' 
        })
        .then(res => res.json())
        .then(res => dispatch(fetchRecipesSuccess(res)))
        .catch(err => dispatch(fetchRecipesError(err)));
}

//GET - retrieve single recipe
export const fetchSingleRecipe = id => dispatch => {
    dispatch(fetchSingleRecipeRequest());
    return fetch(`${API_BASE_URL}/api/recipes/${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => dispatch(fetchSingleRecipeSuccess(res)))
        .catch(err => dispatch(fetchSingleRecipeError(err)));
}

//GET - retrieve recipes by meal
export const fetchRecipesByMeal = meal => dispatch => {
    dispatch(fetchRecipesByMealRequest());
    return fetch(`${API_BASE_URL}/api/recipes/meals/${meal}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => dispatch(fetchRecipesByMealSuccess(res)))
        .catch(err => dispatch(fetchRecipesByMealError(err)));
}