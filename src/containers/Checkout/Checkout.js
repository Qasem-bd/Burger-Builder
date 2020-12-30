import './Checkout.module.css'
import React, { Component } from 'react'
import CheckoutSummery from '../../components/CkeckoutSummery/CheckoutSummery'

class Checkout extends Component {
    state = {
        ingredients : {
            salad:1,
            cheese:1,
            meat:1
        }
    }
    componentDidMount () {
        const query= new URLSearchParams(this.props.location.search)
        // console.log(query.entries()); it log a Empty obj
        const ingredients = {}
        for (let [key,value] of query.entries()) {
            ingredients[key] = +value
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
           </div>
       );
   }
}
export default Checkout;