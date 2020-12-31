import './Checkout.module.css'
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import CheckoutSummery from '../../components/CkeckoutSummery/CheckoutSummery'
import ContactData from '../../containers/Checkout/ContactData/ContactData'

class Checkout extends Component {

    state = {
        ingredients : {
            salad:1,
            cheese:1,
            meat:1
        },
        totalPrice : 0
    }
    
    componentDidMount () {
        const query= new URLSearchParams(this.props.location.search)
        // console.log(query.entries()); it log a Empty obj
        const ingredients = {}
        for (let [key,value] of query.entries()) {
            if (decodeURIComponent(key) === 'totalPrice') {
                  this.setState({totalPrice : value})
            }
            else {
                ingredients[key] = +value
            }        
        }
        this.setState({ingredients: ingredients}) 
    }

    checkoutCancelHandler = () => {
       this.props.history.goBack();
    }
    checkoutContinueHandler = () => {
        
        
        this.props.history.replace('/checkout/contact-data')
    }

   render () {
       return (
           <div>
               <CheckoutSummery 
                    ingriedents = {this.state.ingredients}
                    checkoutCancelled= {this.checkoutCancelHandler}
                    checkoutContinued = {this.checkoutContinueHandler} />
                <Route path = {this.props.match.path + '/contact-data'} 
                      render = {() => <ContactData ingredients = {this.state.ingredients} totalPrice = {this.state.totalPrice}/>}/>
           </div>
       );
   }
}
export default Checkout ;