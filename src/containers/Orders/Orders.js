import classes from './Orders.module.css'
import React,{Component} from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler'
import Spinner from '../../components/UI/Spiner/Spinner'
import * as actions from '../../store/actions/index'
import { connect } from "react-redux";
class Orders extends Component {
   
    componentDidMount () {
        console.log(this.props);
       this.props.onFetchOrders(this.props.token)
    }

    render () {
        let toShowOrders = <Spinner/>
        if (!this.props.loading) {
            toShowOrders =  this.props.orders.map(order => {
                                return (<Order 
                                        key = {order.id}
                                        ingredients = {order.ingredients}
                                        price = {order.price} />);
                            })
        }
        if(this.props.error) {
            toShowOrders = <p>Some Thing is Error</p>
        }

        return (
            <div className = {classes.Orders}>
                {toShowOrders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders : state.order.orders,
        loading : state.order.loading,
        error : state.order.error,
        token : state.auth.idToken
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : (token) => dispatch(actions.tryFetchOrders(token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios))  ;