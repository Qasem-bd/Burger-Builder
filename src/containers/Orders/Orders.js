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
       this.props.onFetchOrders()
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
        loading : state.order.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders : () => dispatch(actions.tryFetchOrders())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios))  ;