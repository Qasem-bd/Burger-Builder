import classes from './ContactData.module.css'
import React,{Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spiner/Spinner'
import {withRouter} from 'react-router-dom'

class ContactData extends Component {
    state = {
        name:'',
        email:'',
        address : {
            street : '',
            postalCode: ''
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
        let form = (
            <form>
                <input className = {classes.Input}  type = 'text' name = 'name' placeholder = 'Your Name'/>
                <input className = {classes.Input} type = 'email' name = 'email' placeholder = 'Your Email'/>
                <input className = {classes.Input} type = 'text' name = 'street' placeholder = 'Street'/>
                <input className = {classes.Input} type = 'text' name = 'postal' placeholder = 'Postal Code'/>
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