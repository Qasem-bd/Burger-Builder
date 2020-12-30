import classes from './NavigationItems.module.css'
import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems = () => (
    
    <ul className = {classes.NavigationItems}>
        <NavigationItem Link ='/' active  >Burger Builder</NavigationItem>
        <NavigationItem Link = '/checkout'>Checkout</NavigationItem>
        <NavigationItem Link = '/'>About</NavigationItem>   
    </ul>
);

export default NavigationItems;