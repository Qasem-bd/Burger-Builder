import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {
   const styleClasses = [classes.InputElement]
   let validationError = null;
   //Checking The valida
   if(props.invalid && props.shouldValidate && props.touched) {
     styleClasses.push(classes.Invalid);
     validationError = <p className = {classes.ValidationError}>Please enter a valid value!</p>;
   }
    
   let inputElement = null
    switch (props.elementType) {
        case ('input') :
            inputElement = <input  className = {styleClasses.join(' ')} 
                                  {...props.elementConfig}
                                  value = {props.value}
                                  onChange = {props.changed}/>
            break;
        case ('textarea') :
            inputElement = <textarea className = {styleClasses.join(' ')}
                                     {...props.elementConfig}
                                     value = {props.value}
                                     onChange = {props.changed}/>
            break;
        case ('select') :
            inputElement = <select className = {styleClasses.join(' ')}
                                        {...props.elementConfig}
                                        value = {props.value}
                                        onChange = {props.changed}>
                                             {props.elementConfig.options.map(option => {
                                                return <option key = {option.value} value = {option.value}>
                                                         {option.displayValue}
                                                      </option>
                                            })}
                                        </select>

            break;
        default :
        inputElement = <input className = {styleClasses.join(' ')}
                             {...props.elementConfig}
                             value = {props.value}
                             onChange = {props.changed} />
    }

    return (
        <div className = {classes.Input}>
            <label className = {classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default Input ;