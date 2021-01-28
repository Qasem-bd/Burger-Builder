
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
const addIngredient = (state,action) => {
    return {
        ...state,
        ingredients : {
            ...state.ingredients,
            [action.ingredientName] : state.ingredients[action.ingredientName] +1
        },
        totalPrice : state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
    }
}
const removeIngredient = (state,action) => {
    return {
        ...state,
        ingredients : {
            ...state.ingredients,
            [action.ingredientName] : state.ingredients[action.ingredientName] -1
        },
        totalPrice : state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]

    }  
}
const initIngredients = (state,action) => {
    return {
        ...state,
        ingredients : {
            salad : action.ingredients.salad,
            cheese : action.ingredients.cheese,
            meat : action.ingredients.meat
        },
        totalPrice: 4,
        error : false
    }
}
const fetchIngredientsFail = (state,action) => {
    return {
        ...state,
        error : true
    }
}
const reducer = (state = initialState, action) => {
    
    switch (action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state,action)

        case actionTypes.REMOVE_INGREDIENT :
            return removeIngredient(state,action);

        case actionTypes.INIT_INGREDIENTS :
           return initIngredients(state,action);
        
        case actionTypes.FETCH_INGREDIENTS_FAILD :
           return fetchIngredientsFail(state,action);
    
            
        default:
            return state;
    }
}

export default reducer;
