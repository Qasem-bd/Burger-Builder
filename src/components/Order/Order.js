import classes from './Order.module.css'
import React from 'react'

const order = (props) => {
    const ingredients = []
    
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name : ingredientName,
            amount : props.ingredients[ingredientName]
        });

    }

    const ingredientsOutput = ingredients.map(ig => {
        return <span key = {ig.name} 
                     className = {classes.Ingredients} >{ig.name} : {ig.amount} </span>
    })
    console.log()
    
    return (
        <div className = {classes.Order}>
        <p>Ingredients : {ingredientsOutput} </p>
            <p>Price : <strong>USD {props.price}</strong> </p>
        </div>
    );
}

export default order;