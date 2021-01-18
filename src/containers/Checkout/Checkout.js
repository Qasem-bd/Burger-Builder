import './Checkout.module.css';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummery from '../../components/Order/CkeckoutSummery/CheckoutSummery';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component {


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
                    ingriedents = {this.props.ings}
                    checkoutCancelled= {this.checkoutCancelHandler}
                    checkoutContinued = {this.checkoutContinueHandler} />
                <Route path = {this.props.match.path + '/contact-data'} 
                      component = {ContactData}/>
           </div>
       );
   }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout) ;