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

//GET - retrieve recipes
export const fetchRecipes = () => (dispatch) => {
    dispatch(fetchRecipesRequest());
    return fetch(`${API_BASE_URL}/api/recipes`, { 
        method: 'GET' 
    })
        .then(res => res.json())
        .then(res => dispatch(fetchRecipesSuccess(res)))
        .catch(err => dispatch(fetchRecipesError(err)));
}