import classes from './Logo.module.css'
import React from 'react'
import burgerLogo from '../../assets/Images/burger-logo.png'

const logo = (props) => {

    return(
     <div className = {classes.Logo}>
         <img src = {burgerLogo} alt='MyBurger'/>
     </div>
    )
}
export default logo;