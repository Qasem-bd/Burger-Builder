import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

// Start Actions for The BurgerPurchasing 

// This is action to display Loading while Purchasing
export const purchaseBurgerStart = () => {
    return {
        type : actionTypes.PURCHASE_BURGER_START
    }
}
export const tryPurchaseBurger = ( orderData, token) => {
    return dispatch => {
        dispatch (purchaseBurgerStart());
        console.log(token)
        axios.post('/orders.json?auth=' + token, orderData).
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
// Actoin for Storing the Status of Checkoutstart, That helps by Redirecting to Home Page after PurchaseSuccess
export const checkoutStart = () => {
    return {
        type : actionTypes.CHECKOUT_START
    }
}
export const checkoutCancel = () => {
    return {
        type : actionTypes.CHECKOUT_CANCEL
    }
}

// End Actions for The BurgerPurchasing


// Start Actions for Fetching Orders 

export const fetchOrdersStart = () => {
    return {
        type : actionTypes.FETCH_ORDERS_START
    }
}
export const tryFetchOrders = (token) => {
    return dispatch => {
        // Tell The UI we started to Fetch The Orders
        dispatch (fetchOrdersStart())
        axios.get ('/orders.json?auth=' + token)
        .then (res => {
            const fetchedOrders = [];
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id : key
                })
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));

        })
        .catch (err => {
            
            dispatch(fetchOrdersFail(err))
        })
    }

}
export const fetchOrdersSuccess = (fetchedOrders) => {
    return {
        type : actionTypes.FETCH_ORDERS_SUCCESS,
        orders : fetchedOrders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type : actionTypes.FETCH_ORDERS_FAIL,
        error : error
    }
}

// End Actions for Fetching Orders 

