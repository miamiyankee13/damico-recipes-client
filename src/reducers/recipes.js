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
} from '../actions/recipes';

const initialState = {
    recipes: [],
    currentRecipe: null,
    loading: false,
    feedback: null,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_RECIPES_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case FETCH_RECIPES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                recipes: action.data.recipes
            });
        case FETCH_RECIPES_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.error.message
            });
        default:
            return state;
    }
}