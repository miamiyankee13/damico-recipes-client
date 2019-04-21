//import modules
import { API_BASE_URL } from '../../config';
import { 
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_ERROR,
    fetchRecipesRequest,
    fetchRecipesSuccess,
    fetchRecipesError,
    fetchRecipes
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
            const error ='Bad request'
            const action = fetchRecipesError(error);
            expect(action.type).toEqual(FETCH_RECIPES_ERROR);
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
});