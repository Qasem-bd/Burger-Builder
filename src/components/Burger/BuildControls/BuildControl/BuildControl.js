import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => {

    return (
        <div className = {classes.BuildControl}>
            <div className = {classes.Label}>{props.ingredLabel}</div>
            <button className = {classes.Less}
             onClick = {(event) => props.removeIngredient(props.ingredLabel,event)}
             disabled = {props.isDisabled}
             >Less</button>
            <button className = {classes.More} 
            onClick = {(event) => props.addIngredient(props.ingredLabel,event)}>More</button>
        </div>
    )
}

export default buildControl;