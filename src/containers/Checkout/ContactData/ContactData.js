import classes from './ContactData.module.css'
import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spiner/Spinner'
import {withRouter} from 'react-router-dom'
import Input from '../../../components/UI/Input/Input'

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
                valid : false
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
                valid : false
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
                valid : false
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
                valid : false
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
                valid : false
            }  ,
            deliveryMethod: {
                elementType : 'select',
                elementConfig : {
                    options : [
                        {value : 'fastest', displayValue: 'Fastest'},
                        {value : 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value : '',
                validation : {
                    required : true
                },
                valid : false
            } 
        },
      
        loading: false
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
         
        const toSendOrder = {
            ingredients : this.props.ingredients,
            price : this.props.totalPrice,
            orderData: formData
        }
        axios.post('/orders.json',toSendOrder).
            then (response => { 
                    // logging the Response
                    console.log(response);
                    this.setState({loading : false})
                    this.props.history.push('/')
            })
            .catch(error => { 
                    this.setState({loading : false})
                    console.log(error)
            })
    }
    
    checkFormElement = (value,rules) => {
        let isValid = false
        console.log(rules)
        
        if (rules.required) {
            isValid = value.trim() !== '';
        }
        if (rules.maxLength){
            isValid = (value.trim().length <= rules.maxLength) && isValid
            console.log(value.trim().length)
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
        updatedFormElement.valid =  this.checkFormElement(updatedFormElement.value,updatedFormElement.validation)
            //logging The updatedFormElement
            console.log(updatedFormElement)

        updatedOrderForm[identifier] = updatedFormElement;
        this.setState({orderForm : updatedOrderForm})

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
                                        changed = {(event) => this.inputChangeHandler(event,formElement.id)}/>
                        }) 
                }
                <Button btnType = 'Success' >ORDER</Button>
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

export default withRouter (ContactData) ;