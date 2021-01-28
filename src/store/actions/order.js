import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id,orderData) => {
    return {
        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId : id,
        orderData :orderData 
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error : error
    }
}
// This is action to display Loading while Purchasing
export const purchaseBurgerStart = () => {
    return {
        type : actionTypes.PURCHASE_BURGER_START
    }
}
export const tryPurchaseBurger = (orderData) => {
    return dispatch => {
        dispatch (purchaseBurgerStart());

        axios.post('/orders.json',orderData).
        then (response => { 
                // logging the Response
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name,orderData))
        })
        .catch(error => { 
                console.log(error)
                dispatch(purchaseBurgerFail(error))
        })
    }
}

export const checkoutStart = () => {
    return {
        type : actionTypes.CHECKOUT_START
    }
}