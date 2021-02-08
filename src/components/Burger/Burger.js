import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css';

const burger = (props) => {
    let IngredientsBuffer = [];
    let ingredientRepet = Object.values(props.ingriedents);
    let ingredientsArray = Object.keys(props.ingriedents)
       
    ingredientsArray.map((ingredient,index) =>{
        for (let i = 0; i < ingredientRepet[index];i++) {
            IngredientsBuffer.push(<BurgerIngredient key = {ingredient + i} type = {ingredient} />) 
        }
        return null;

    });
    if (IngredientsBuffer.length ===0 ) {
        IngredientsBuffer.push(<p key = {1} className = {classes.Empty}>Please start adding elements</p>);
    }
    
    
    return (
        <div className = {classes.Burger} >
             <BurgerIngredient type = 'bread-top' />
            {IngredientsBuffer}
              <BurgerIngredient type = 'bread-bottom' />
        </div>
      
    );

}

export default burger;