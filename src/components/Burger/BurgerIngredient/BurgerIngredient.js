import classes from './BurgerIngredient.module.css';
import React from 'react';
import PropTypes from 'prop-types'


const burgerIngredient = (props) => {
let ingredient = null;
    switch (props.type) {
        case 'bread-bottom' :
            ingredient = <div className = {classes.BreadBottom}> </div>
            break;
        case 'bread-top' :
            ingredient = <div className ={classes.BreadTop}>
                               
                               <div className = {classes.Seed2}></div>
                         </div>
            break;
        case 'meat' :
                ingredient = <div className = {classes.Meat }>  </div>
                break; 
        case 'cheese' :
                ingredient = <div className = {classes.Cheese }></div>
                break;
        case 'salad' :
                ingredient = <div className = {classes.Salad }>  </div>
                break;
        case 'bacon' :
                ingredient = <div className = {classes.Bacon }></div>
                break;
        default :
        ingredient = <div> Es gipt ein problem bei  yourSwitch</div>
        
        }
        burgerIngredient.propTypes = {
            type : PropTypes.string.isRequired
        }
    
    return ingredient;    

        
}

export default burgerIngredient;