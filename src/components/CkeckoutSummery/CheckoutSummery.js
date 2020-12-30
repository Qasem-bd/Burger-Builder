import classes from './CheckoutSummery.module.css'
import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'


const checkoutSummery = (props) => {

    return (
        <div className = {classes.CheckoutSummery}>
            <h1>We hope it tasts well !!</h1>
            <div className = {classes.Burger}>
                <Burger ingriedents = {props.ingriedents}/>
            </div>
            <div>
                <Button
                    btnType = 'Danger'
                    clicked>CANCEL</Button>
                <Button
                    btnType = 'Success'
                    clicked>COUNTINUE</Button>
            </div>
           
        </div>
    );
}

export default checkoutSummery;