import classes from './auth.module.css'
import React, {Component} from 'react'

class Auth extends Component {
    state = {
        controls:{
            name:{
                elementType : 'input',
                elementConfig : {
                    type: 'email',
                    placeholder : 'Mail Address'
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
        }
    }

    render () {

        return (
            <div>
                <form>

                </form>
            </div>
        );

    }
}

export default Auth;