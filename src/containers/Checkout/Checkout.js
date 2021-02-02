import './Checkout.module.css';
import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import CheckoutSummery from '../../components/Order/CkeckoutSummery/CheckoutSummery';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/index";

class Checkout extends Component {


    componentWillUnmount() {
        this.props.onCheckoutCancel();
    }

    checkoutCancelHandler = () => {
        this.props.onCheckoutCancel();
        this.props.history.goBack();
       
    }
    checkoutContinueHandler = () => {
        
        
        this.props.history.replace('/checkout/contact-data')
    }

   render () {
       let summery = <Redirect to = "/"/>
       if (this.props.ings) {
           let checkoutRedirect = (!this.props.checkoutStart) ? <Redirect to = "/"/> : null
           summery =          
             <div>
                 {checkoutRedirect}
                <CheckoutSummery 
                        ingriedents = {this.props.ings}
                        checkoutCancelled= {this.checkoutCancelHandler}
                        checkoutContinued = {this.checkoutContinueHandler} />
                <Route path = {this.props.match.path + '/contact-data'} 
                        component = {ContactData}/>
             </div>
       }
       return summery;
   }
}

const mapStateToProps = state => {
    return {
        ings : state.burgerBuilder.ingredients,
        checkoutStart : state.order.checkoutStart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCheckoutCancel : () => dispatch(actions.checkoutCancel())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout) ;