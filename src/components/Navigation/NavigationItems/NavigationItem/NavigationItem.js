import classes from './NavigationItem.module.css'
import React from 'react'

const NavigationItem = (props) => (

    <li className = {classes.NavigationItem}>
    
        <a href = {props.Link}
        className = {props.active? classes.active : null}>{props.children}</a>
    </li>
);

export default NavigationItem;