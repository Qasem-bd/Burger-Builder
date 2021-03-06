import classes from './auth.module.css'
import React, {Component} from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import * as actions from '../../store/actions/index'
import { connect, Connect } from 'react-redux';
import Spinner from '../../components/UI/Spiner/Spinner'
import {Redirect} from 'react-router-dom'


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
    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
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
    }
    confirmSignup = () => {
        this.setState(prevState =>  { return {isSignUp : true}})
    }
    confirmSignin = () => {
        this.setState(prevState =>  { return {isSignUp : false}})
    }
    switchAuthMethodHandler = () => {
        this.setState(prevState => {
            return {isSignUp: !prevState.isSignUp}
        })
    }

    // Start Ckeckout after Successfully login
    goToCheckout () {

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
            <div>
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
            </div>
        );
        // Displaying The Spinner While Loading
        if (this.props.loading) {
            form = <Spinner/>
        }
        // Displaying ErrorMessage when a Error hapens
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p className = {classes.ErrorMessage} >{this.props.error.message}</p>
        }
        // Redirecting  after successfully Logging-in [BurgerBuilder -> Authentication -> Checkout || Authentication -> BurgerBuilder]
        let authRedirect = null
        if (this.props.isAuthenticated) {
            if(this.props.price > 4) {
                this.props.onBeginCheckout();
                authRedirect = <Redirect to = "/checkout" />
            }
            else {
                authRedirect = <Redirect to = "/" />
            }
        }

        return (
         
            <div className = {classes.Auth}>
                   {authRedirect}
                {errorMessage}
                <form onSubmit = { this.onSubmitHandler}>
                    {form}
                    <Button btnType = 'Success'>{this.state.isSignUp ? 'Sign-up' : 'Sign-in' }</Button>
                </form>
                <Button btnType = 'Danger'
                             clicked = {this.switchAuthMethodHandler} >SWITCH TO {this.state.isSignUp ? 'SIGN-IN' : 'SIGN-UP' }</Button>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        loading : state.auth.loading,
        error : state.auth.error,
        isAuthenticated : state.auth.idToken !== null,
        price : state.burgerBuilder.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth : (email,password,isSignup) => dispatch(actions.tryAuth(email,password,isSignup)),
        onBeginCheckout: () => dispatch (actions.checkoutStart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Auth);