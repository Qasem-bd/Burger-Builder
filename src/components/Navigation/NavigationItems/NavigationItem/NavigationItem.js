import classes from './NavigationItem.module.css'
import React from 'react'
import {NavLink} from 'react-router-dom'

const NavigationItem = (props) => (

    <li className = {classes.NavigationItem}>
    
        <NavLink to = {props.Link}
                activeClassName  = {classes.active}
                exact = {props.genau}>{props.children}</NavLink>
    </li>
);

export default NavigationItem;