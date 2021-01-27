
import * as actionTypes from '../actions/actionTypes'
const initialState = {
    ingredients : null,
    totalPrice: 4,
    error: false
}
const INGREDIENTS_PRICES = {
    salad:0.7,
    cheese:0.8,
    meat:1.3
}
const reducer = (state = initialState, action) => {
    
    switch (action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] +1
                },
                totalPrice : state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
            }

        case actionTypes.REMOVE_INGREDIENT :
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] -1
                },
                totalPrice : state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
    
            }  
        case actionTypes.INIT_INGREDIENTS :
            return {
                ...state,
                ingredients : {
                    salad : action.ingredients.salad,
                    cheese : action.ingredients.cheese,
                    meat : action.ingredients.meat
                },
                error : false
            }
        
        case actionTypes.FETCH_INGREDIENTS_FAILD :
            return {
                ...state,
                error : true
            }
    
            
        default:
            return state;
    }
}

export default reducer;
