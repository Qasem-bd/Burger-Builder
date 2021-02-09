import reducer from './auth'
import * as actionTypes from '../actions/actionTypes';

describe ('auth reducer' , () => {

    it('should return the initial state', () => {   
        expect (reducer(undefined,{})).toEqual ({
            idToken: null,
            userId : null,
            error : null,
            loading : false
        })
    })

    it('should store the token up on login ', () => {
        expect(reducer({
            idToken: null,
            userId : null,
            error : null,
            loading : false
        },{
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-idToken',
            userId : 'some-userId',
            
        })).toEqual({
            idToken: 'some-idToken',
            userId : 'some-userId',
            error :null,
            loading : false
        })
    });

})