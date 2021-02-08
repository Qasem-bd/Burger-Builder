import * as actionTypes from '../actions/actionTypes'
const initialState = {
    orders : [],
    loading:false,
    checkoutStart: false,
    error : false
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        // Start  Actions for Purchasing The Burger
        case actionTypes.PURCHASE_BURGER_START :
            return {
                ...state,
                loading:true,
                error : false
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
                loading:false,
                error:true
            }   
        // Actoin for Storing the Status of Checkoutstart, That helps by Redirecting to Home Page after PurchaseSuccess
        case actionTypes.CHECKOUT_START :
            return {
                ...state,
                checkoutStart: true,
                loading: false
            }
        case actionTypes.CHECKOUT_CANCEL :
            return {
                ...state,
                checkoutStart: false,
                loading : false
            }

        // End Actions for Purchasing The Burger

        // Start Actions for Fetching The Orders
        case actionTypes.FETCH_ORDERS_START :
            return {
                ...state,
                loading:true,
                error: false
            }

        case actionTypes.FETCH_ORDERS_SUCCESS :
            return {
                ...state,
                orders : action.orders,
                loading: false
            }
        case actionTypes.FETCH_ORDERS_FAIL :
            return {
                ...state,
                error: true
            }
        // Start Actions for Fetching The Orders
    
        default:
            return state
    }
}
export default reducer;