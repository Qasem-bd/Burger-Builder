import * as actionTypes from '../actions/actionTypes';

const initialState = {
    idToken: null,
    userId : null,
    error : null,
    loading : false
}

const authStart = (state,action) => {
    return {
        ...state,
        loading: true,
        error:null
    }
}
const authSuccess = (state,action) => {
    return {
        ...state,
        idToken: action.idToken,
        userId : action.userId,
        loading: false,
        error : null
        
    }
}
const authFail = (state,action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}
const logout = (state,action) => {
    return {
        ...state,
        idToken:null,
        userId: null
    }
}

const reducer = (state = initialState,action) => {

    switch (action.type) {
        case actionTypes.AUTH_START:
           return authStart(state,action);

        case actionTypes.AUTH_SUCCESS :
            return authSuccess(state, action);

        case actionTypes.AUTH_FAIL :
            return authFail(state,action);
        
        case actionTypes.LOGOUT :
            return logout(state,action);
            
        default:
            return state
    }
}

export default reducer ;