import classes from './Orders.module.css'
import React,{Component} from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler'
class Orders extends Component {
    state = {
        orders : [],
        loading: true,
        error: false
        
    }
   
    componentDidMount () {
        console.log(this.props);
        axios.get ('/orders.json')
        .then (res => {
            const fetchedOrders = []
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id : key
                })
            }
            this.setState({loading:false, orders: fetchedOrders});

        })
        .catch (err => {
            this.setState({loading:false});
          


        })
    }

    render () {
        return (
            <div className = {classes.Orders}>
               {this.state.orders.map(order => {
                   return (<Order 
                             key = {order.id}
                             ingredients = {order.ingredients}
                             price = {order.price} />);
               })}
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios) ;