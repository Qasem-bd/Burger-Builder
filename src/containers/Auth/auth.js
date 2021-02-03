import classes from './auth.module.css'
import React, {Component} from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import * as actions from '../../store/actions/index'
import { connect, Connect } from 'react-redux';


class Auth extends Component {
    state = {
        controls:{
            email:{
                elementType : 'input',
                elementConfig : {
                    type: 'email',
                    placeholder : 'Mail Address'
                },
                value : '',
                validation : {
                    required : true,
                    isEmail:true
                },
                valid : false,
                touched : false
            },
            password:{
                elementType : 'input',
                elementConfig : {
                    type: 'password',
                    placeholder : 'Password'
                },
                value : '',
                validation : {
                    required : true,
                    minLength: 7
                },
                valid : false,
                touched : false
            }
        },
        isSignUp: null
    }
    // Check if The form values match to The Rules on Form
    checkValidity = (value,rules) => {
        let isValid = false
    
        // rules is null by selection
        if (! rules)
          return true
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        if (rules.maxLength){
            isValid = (value.trim().length <= rules.maxLength) && isValid
        }
        if (rules.minLength) {
            isValid = (value.trim().length >= rules.minLength) && isValid
        }
        if(rules.isEmail) {
            const patter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = patter.test(value) && isValid;
        }
        if(rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }
             
            return isValid;
    }

    // Function to handle the inputValue of The FormInputElement and store the result in the State
    inputChangeHandler = (event,controlName ) => {
        let updatetControlform = {
            ...this.state.controls
        }
        let updatedformElement = {
            ...updatetControlform[controlName]
        }
        updatedformElement.value = event.target.value;
        
        updatedformElement.valid = this.checkValidity( updatedformElement.value,updatedformElement.validation);

         // true wehn we write something     
         updatedformElement.touched = true;
         //Check the validation for the Form complete 
         updatetControlform[controlName] = updatedformElement;

         this.setState({controls : updatetControlform})

    }
    // Apply on Submitting The Form
    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignUp)
        console.log(this.state.isSignUp)
    }
    confirmSignup = () => {
        this.setState({isSignUp : true})
    }
    confirmSignin = () => {
        this.setState({isSignUp : false})
    }
    switchAuthMethodHandler = () => {
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp}
        })
    }
    render () {

        let formElementsArray = []
        for (let key in this.state.controls) {
            formElementsArray.push({
                config : this.state.controls[key],
                id : key
            });
        }
        // Create The Form InputElements
        let form = (
            <form >
                {
                   formElementsArray.map(formElement => {
                         return  <Input key = {formElement.id}
                                        elementType = {formElement.config.elementType}
                                        elementConfig = {formElement.config.elementConfig}
                                        value = {formElement.config.value}
                                        changed = {(event) => this.inputChangeHandler(event,formElement.id)}
                                        invalid = { !formElement.config.valid}
                                        shouldValidate = {formElement.config.validation}
                                        touched = {formElement.config.touched}/>
                        }) 
                }
            </form>
        );

        return (
            <div className = {classes.Auth}>
                <form onSubmit = { this.onSubmitHandler}>
                    {form}
                    <Button btnType = 'Success'>{this.state.isSignUp ? 'SIGN-UP' : 'SIGN-IN' }</Button>
                </form>
                <Button btnType = 'Danger'
                             clicked = {this.switchAuthMethodHandler} >SWITCH TO {this.state.isSignUp ? 'SIGN-IN' : 'SIGN-UP' }</Button>
            </div>
        );

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth : (email,password,isSignup) => dispatch(actions.tryAuth(email,password,isSignup))
    }
}

export default connect(null,mapDispatchToProps) (Auth);