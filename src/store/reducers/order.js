import * as actionTypes from '../actions/actionTypes'
const initialState = {
    orders : [],
    loading:false,
    checkoutStart: false
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.CHECKOUT_START :
            return {
                ...state,
                checkoutStart: true
            }

        case actionTypes.PURCHASE_BURGER_START :
            return {
                ...state,
                loading:true
            }

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id:action.orderId
            }
            return {
                ...state,
                loading : false,
                checkoutStart: false,
                orders :state.orders.concat(newOrder)
            }
        case actionTypes.FETCH_INGREDIENTS_FAILD :
            return{
                ...state,
                loading:false
            }   
    
        default:
            return state
    }
}
export default reducer;