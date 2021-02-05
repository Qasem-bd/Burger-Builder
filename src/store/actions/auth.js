import { ReactReduxContext } from 'react-redux'
import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken : idToken,
        userId : userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error : error
    }
}
// To logout
export const logout = () => {
    return {
        type : actionTypes.LOGOUT
    }
}
// To logout after specific Time [expiresIn ]
export const checkAuthTimeout = (expiresIn) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        },expiresIn * 1000)
    }
}

export const tryAuth = (email,password,isSignup) => {
    return dispatch => {
        // Starte Authentication
        dispatch(authStart());
        // console.log(email,'---',password,'----',isSignup)
        let url = null;
        let authData= {
            email: email,
            password : password,
            returnSecureToken: true
        }
        if (isSignup) {
             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAHWNHINQqusYWEWmSJJlCWFQHE8N-hacQ'
        }
        else {
             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHWNHINQqusYWEWmSJJlCWFQHE8N-hacQ'
        }
        // console.log(authData)
        // console.log(url)
        axios.post(url,authData)
        .then(res => {
            console.log (typeof(+res.data.expiresIn), res.data.expiresIn);
            dispatch(checkAuthTimeout(+res.data.expiresIn))
            dispatch(authSuccess(res.data.idToken,res.data.localId))
        })
        .catch(err => {
            console.log(err.response);
            dispatch(authFail(err.response.data.error));
        })
    }
}