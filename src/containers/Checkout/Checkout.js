import './Checkout.module.css'
import React, { Component } from 'react'
import CheckoutSummery from '../../components/CkeckoutSummery/CheckoutSummery'

class Checkout extends Component {
    state = {
        ingriedents : {
            salad:1,
            cheese:1,
            meat:1
        }
    }

    checkoutCancelHandler = () => {
       this.props.history.goBack();
    }
    checkoutContinueHandler = () => {
        console.log(this.props)
        this.props.history.replace('/checkout/contact-data')
    }

   render () {
       return (
           <div>
               <CheckoutSummery 
                    ingriedents = {this.state.ingriedents}
                    checkoutCancelled= {this.checkoutCancelHandler}
                    checkoutContinued = {this.checkoutContinueHandler} />
           </div>
       );
   }
}
export default Checkout;