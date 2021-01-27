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

export const tryPurchaseBurger = (toPurchaseOrder) => {
    return dispatch => {
        axios.post('/orders.json',toPurchaseOrder).
        then (response => { 
                // logging the Response
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data,toPurchaseOrder))
        })
        .catch(error => { 
                console.log(error)
                dispatch(purchaseBurgerFail(error))
        })
    }
}