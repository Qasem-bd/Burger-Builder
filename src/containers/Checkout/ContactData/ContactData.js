import classes from './ContactData.module.css'
import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spiner/Spinner'
import {withRouter} from 'react-router-dom'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'
import withErrorHandler from '../../../hoc/withErrorHandler'
import * as actions from '../../../store/actions/index'

class ContactData extends Component {
    state = {
        orderForm : {
            name:{
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Your Name'
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
            email:{
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Your E-Mail'
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
            street : {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Street'
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            } ,
            postalCode: {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'PostalCode'
                },
                value : '',
                validation : {
                    required : true,
                    maxLength: 5,
                    minLength: 5
                },
                valid : false,
                touched : false
            } ,
            country: {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Country'
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            }  ,
            deliveryMethod: {
                elementType : 'select',
                elementConfig : {
                    options : [
                        {value : 'fastest', displayValue: 'Fastest'},
                        {value : 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value : 'fastest',
                valid : true
            } 
        },
      
        loading: false,
        isFormValid: false
    }


    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props)
        // console.log(this.props.ingredients)
        // console.log(this.props.totalPrice)
               
                this.setState({ loading: true })
        const formData = {}
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
         
        const toPurchaseOrder = {
            ingredients : this.props.ings,
            price : this.props.price,
            orderData: formData
        }
        this.props.onOrderBurger(toPurchaseOrder);

    }
    
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
             
            return isValid;
    }

    inputChangeHandler = (event,identifier) => {
        
        const updatedOrderForm = {...this.state.orderForm}

        const updatedFormElement = {
                     ...updatedOrderForm[identifier]
                  }

        updatedFormElement.value = event.target.value;
        //check if the value of formElement is valid or not, and store the result in the valid property
        updatedFormElement.valid =  this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
        // true wehn we write something     
        updatedFormElement.touched = true;
        //Check the validation for the Form complete 
        updatedOrderForm[identifier] = updatedFormElement;

        let isFormValid = true
        for (let formElement in updatedOrderForm) {
            isFormValid = updatedOrderForm[formElement].valid && isFormValid
        }
        this.setState({orderForm : updatedOrderForm,isFormValid : isFormValid })

    }

    render () {
        let formElementsArray = []
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                config : this.state.orderForm[key],
                id : key
            });
        }
        let form = (
            <form onSubmit = {this.orderHandler}>
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
                <Button disabled = {!this.state.isFormValid} btnType = 'Success' >ORDER</Button>
            </form>
       
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        
        return (
            <div className = {classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price : state.totalPrice
    }
}
const mapDispatchtoProps = dispatch => {
    return {
        onOrderBurger : (orderData) => dispatch(actions.tryPurchaseBurger(orderData))
    }
}

export default connect(mapStateToProps,mapDispatchtoProps) (withErrorHandler (ContactData ,axios)) ;