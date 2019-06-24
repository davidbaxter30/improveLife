import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

export const ACTION_TYPES = {
  FETCH_RECIPES: 'healthy-food/FETCH_RECIPES'
};

const initialState = {
  loading: false,
  errorMessage: null,
  recipes: [
    {
      name: 'Food thing',
      ingredients: ['salt', 'pepper', 'cucumbers'],
      instructions: ['step one', 'step two']
    },
    {
      name: 'Food thing',
      ingredients: ['salt', 'pepper', 'cucumbers'],
      instructions: ['step one', 'step two']
    }
  ]
};

export type HealthyFoodState = Readonly<typeof initialState>;
export type Recipe = Readonly<typeof initialState.recipes[0]>;

// Reducer

export default (state: HealthyFoodState = initialState, action): HealthyFoodState => {
  // tslint:disable-next-line:no-console
  console.log('in health-menu reducer: ', state);
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_RECIPES):
      return {
        ...state,
        errorMessage: null,
        loading: true
      };
    case FAILURE(ACTION_TYPES.FETCH_RECIPES):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_RECIPES):
      return {
        ...state,
        loading: false
        // recipes: action.payload.data
      };
    default:
      return state;
  }
};

// Actions

export const getRecipes = () => ({
  type: ACTION_TYPES.FETCH_RECIPES
  // payload: axios.get('healthfood/recipes')
});
