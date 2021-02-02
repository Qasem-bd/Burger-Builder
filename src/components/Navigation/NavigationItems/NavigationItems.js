import classes from './NavigationItems.module.css'
import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems = () => (
    
    <ul className = {classes.NavigationItems}>
            {/* we have used "genau to mention to that, the Route "/" will be active just by Route and not by subRoute */}
        <NavigationItem Link ='/' genau >Burger Builder</NavigationItem> 
        <NavigationItem Link = '/auth'>Authenticate</NavigationItem>
        <NavigationItem Link = '/checkout'>Checkout</NavigationItem>
        <NavigationItem Link = '/orders'>Orders</NavigationItem>
        <NavigationItem Link = '/about'  >About</NavigationItem>   
    </ul>
);

export default NavigationItems;