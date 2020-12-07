import React,{Component} from 'react';
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {
    state = {
        showStatus: false
    }

    toggleSidedrawerHandler = () => {
        this.setState((prevState) => {
            return ({
                showStatus : !prevState.showStatus
            })
        })
    }

render() {
    return (
        <Aux>
        <Toolbar openSidedrawer = {this.toggleSidedrawerHandler}/>
        <Sidedrawer
            showStatus = {this.state.showStatus}
            closeSidedrawer = {this.toggleSidedrawerHandler}
        />
        <main className = {classes.content}>
            {this.props.children}
        </main>
        </Aux>        
    );
}
   
}

export default Layout;