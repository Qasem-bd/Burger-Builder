import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';
import Price from './Price/Price'


const buildcontrols = (props) => {
    const  ingredients = Object.keys(props.ingredients);
    // let    controlsBuffer = []
    
    // for (let i = 0; i < ingredients.length; i++){
    //     controlsBuffer.push(
    //         <BuildControl 
    //         key = {ingredients[i] + i} 
    //         ingredLabel = {ingredients[i]} />
    //     );
    // }

    return (
        <div className = {classes.BuildConrols}>
            <Price price = {props.price}/>
         {
         //controlsBuffer
          ingredients.map((ingredient,index) => {
              return <BuildControl 
                     key = {ingredient + index}
                     ingredLabel = {ingredient}
                     removeIngredient = {props.removeIngredient}
                     addIngredient={props.addIngredient}
                     isDisabled = {props.disabledInfo[ingredient]}
                      />
          })
         }
         <button className = {classes.OrderButton} 
         disabled = {!props.hasOrder}
         onClick = {props.ordered}
         >{props.isAuth ? 'ORDER NOW' : 'SIGN-UP TO ORDER'}</button>
         </div>
    );
    

}


export default buildcontrols;