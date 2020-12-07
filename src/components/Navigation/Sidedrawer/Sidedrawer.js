import classes from './Sidedrawer.module.css'
import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxillary'

const sidedrawer = (props) => {
    //...
    return (
        <Aux>
            <Backdrop show = {props.showStatus}
                       click = {props.closeSidedrawer}/>
           <div className = {(props.showStatus)?[classes.Sidedrawer,classes.Open].join(' ')
                                                :[classes.Sidedrawer,classes.Close].join(' ')}>
           <div className = {classes.Logo}>
              <Logo/>
           </div>
        
         <nav>
             <NavigationItems/>
         </nav>
       </div>
        </Aux>
       
    )
}

export default sidedrawer;