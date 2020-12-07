import classes from './ToggleDrawer.module.css'
import React from 'react'

const toggleDrawer = (props) => {
 
    return(
        <div className = {classes.ToggleDrawer}
            onClick = {props.click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default toggleDrawer