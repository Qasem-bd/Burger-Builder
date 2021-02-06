import classes from './NavigationItems.module.css'
import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems = (props) => (
    
    <ul className = {classes.NavigationItems}>
            {/* we have used "genau to mention to that, the Route "/" will be active just by Route and not by subRoute */}
        <NavigationItem Link ='/' genau >Burger Builder</NavigationItem> 
        {
            props.isAuth ?  <NavigationItem Link = '/auth'>Authenticate</NavigationItem> 
                         :  <NavigationItem Link = '/logout'>Logout</NavigationItem> 
        }
       
        {
            props.checkoutBegin ?  <NavigationItem Link = '/checkout'>Checkout</NavigationItem> : null 
        }
       
        {
            props.isAuth ?  <NavigationItem Link = '/orders'>Orders</NavigationItem> : null
        }
       
        <NavigationItem Link = '/about'  >About</NavigationItem>   
    </ul>
);

export default NavigationItems;