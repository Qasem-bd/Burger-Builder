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
                value : 'Qasem Bdier'
            },
            email:{
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Your E-Mail'
                },
                value : ''
            },
            street : {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Street'
                },
                value : ''
            } ,
            postalCode: {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'PostalCode'
                },
                value : ''
            } ,
            country: {
                elementType : 'input',
                elementConfig : {
                    type: 'text',
                    placeholder : 'Country'
                },
                value : ''
            }  ,
            deliveryMethod: {
                elementType : 'select',
                elementConfig : {
                    options : [
                        {value : 'fastest', displayValue: 'Fastest'},
                        {value : 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value : ''
            } 
        },
      
        loading: false
    }


    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props)
        console.log(this.props.ingredients)
        console.log(this.props.totalPrice)
               
                this.setState({ loading: true })
         
        const toSendOrder = {
            ingredients : this.props.ingredients,
            price : this.props.totalPrice,
            customer : {
                name : 'Qasem Bdier',
                address : {
                    street: 'Henkelterosol 13',
                    zipCode: '69123',
                    country : 'Germany'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod : 'fastest'
        }
        axios.post('/orders.json',toSendOrder).
            then (response => { 
                    console.log(response);
                    this.setState({loading : false})
                    this.props.history.push('/')
            })
            .catch(error => { 
                    this.setState({loading : false})
                    console.log(error)
            })
    }

    render () {
        let formElementsArray = []
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                config : this.state.orderForm[key],
                id : key
            });
        let inputElements = formElementsArray.map(formElement => {
            return  <Input key = {formElement.id}
                           elementType = {formElement.config.elementType}
                           elementConfig = {formElement.config.elementConfig}
                           value = {formElement.config.value}/>
        })
        }
        let form = (
            <form>
                {
                   formElementsArray.map(formElement => {
                         return  <Input key = {formElement.id}
                                        elementType = {formElement.config.elementType}
                                        elementConfig = {formElement.config.elementConfig}
                                        value = {formElement.config.value}/>
                        }) 
                }
                {/* <Input elementType = '...' elementConfig = '...' value = '...'/>
                <Input inputtype = 'input'  type = 'email' name = 'email' placeholder = 'Your Email'/>
                <Input  inputtype = 'input' type = 'text' name = 'street' placeholder = 'Street'/>
                <Input inputtype = 'input'  type = 'text' name = 'postal' placeholder = 'Postal Code'/> */}
                <Button 
                    btnType = 'Success'
                    clicked = {this.orderHandler} >ORDER</Button>
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