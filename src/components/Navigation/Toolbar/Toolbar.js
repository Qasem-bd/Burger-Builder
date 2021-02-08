import classes from './Toolbar.module.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import ToggleDrawer from './ToggleDrawer/ToggleDrawer'


const toolbar = (props) => {

    return (
        <header className = {classes.Toolbar}>
          <ToggleDrawer click = {props.openSidedrawer} />
          
          <div className = {classes.Logo}>
             <Logo/>
          </div>
          <nav className = {classes.DesktopOnly}>
            <NavigationItems isAuth = {props.isAuthenticate}
                              checkoutBegin = {props.checkoutStart} 
            />
          </nav> 
        </header>
    );
}

export default toolbar;