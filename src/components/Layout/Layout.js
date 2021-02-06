import React,{Component} from 'react';
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'
import {connect} from 'react-redux'

class Layout extends Component {
    state = {
        showStatus: false
    }

    componentDidUpdate () {
        console.log('isAuth : ', this.props.isAuth)
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
            <Toolbar openSidedrawer = {this.toggleSidedrawerHandler}
                     isAuthenticate = {this.props.isAuth}
                     checkoutStart = {this.props.checkoutStart}
            />

            <Sidedrawer
                showStatus = {this.state.showStatus}
                closeSidedrawer = {this.toggleSidedrawerHandler}
                isAuthenticate = {this.props.isAuth}
                checkoutStart = {this.props.checkoutStart}
            />
            
            <main className = {classes.content}>
                {this.props.children}
            </main>
            </Aux>        
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth : state.auth.idToken !== null ,
        checkoutStart: state.order.checkoutStart
    }
}

export default connect(mapStateToProps) (Layout);