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

   render () {
       return (
           <div>
               <CheckoutSummery ingriedents = {this.state.ingriedents} />
           </div>
       );
   }
}
export default Checkout;