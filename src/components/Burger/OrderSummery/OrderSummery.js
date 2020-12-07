import React from 'react';
import classes from './OrderSummery.module.css';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button'
import Price from '../BuildControls/Price/Price'

const orderSummery = (props) => {
    const orderedIngredients = Object.keys(props.ingredients).map((ingredient) =>{
    return ( <li key = {ingredient}>
                <span style = {{ textTransform: 'capitalize'}}>{ingredient}</span> : {props.ingredients[ingredient]}
            </li>)
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicios Burger with the folowing ingredients : </p>
            <ul>
             {orderedIngredients}
            </ul>
            <Price price = {props.price}/>
            <p>Continue to Checkout</p>
            <Button
                 btnType = {'Danger'}
                 clicked= {props.cancelled}
            >Cancel</Button>
            
            <Button
               btnType = {'Success'}
               clicked = {props.purchased}
            >Continue</Button>
        </Aux>
      
    )
}

export default orderSummery;