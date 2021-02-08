import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const addIngredient = (ingName) => {
    return {
        type : actionTypes.ADD_INGREDIENT,
        ingredientName : ingName
    }
}

export const removeIngredient = (ingName) => {
    return {
        type : actionTypes.REMOVE_INGREDIENT,
        ingredientName : ingName
    }
}
export const setIngredients = (ings) => {
    return {
        type : actionTypes.INIT_INGREDIENTS,
        ingredients : ings
    }
}
export const fetchIngredientsFaild = () => {
    return {
        type : actionTypes.FETCH_INGREDIENTS_FAILD
    }
}
export const initIngredients = () => {
   return dispatch => {
        dispatch(setIngredients());
          axios.get('/ingredients.json').then(res => {
            dispatch(setIngredients(res.data));
        }).catch(error => {
            dispatch(fetchIngredientsFaild());
        } )
   }
}