import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout'
import About from './containers/About/About'
import {Route,Router,Switch,Redirect} from 'react-router-dom';
import * as actions from './store/actions/index'
import {connect} from 'react-redux'
import { Component,lazy,Suspense } from 'react';

const asyncCheckout = lazy(() => import('./containers/Checkout/Checkout'))
const asyncOrders = lazy(() => import('././containers/Orders/Orders'))
const asyncAuth = lazy(() => import('./containers/Auth/auth'))


class App extends Component {
 
  componentDidMount () {
    this.props.onAuthCheck();
  }
    render () {
      let gaurdRoute = (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path = '/auth' component = {asyncAuth}/>
                <Route path = '/about' component = {About}/>
                <Route path = '/' component = {BurgerBuilder}/>
                <Redirect to = "/" />
            </Switch>
        </Suspense>
      )
      if (this.props.isAuth) {
        gaurdRoute = (
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path = '/orders' component = {asyncOrders}/>
                <Route path = '/checkout' component = {asyncCheckout}/>
                <Route path = '/auth' component = {asyncAuth}/>
                <Route path = '/logout' component = {Logout}/>
                <Route path = '/about' component = {About}/>
                <Route path = '/' component = {BurgerBuilder}/>
                <Redirect to = "/" />
            </Switch>
          </Suspense>
        )
      }
      return (
        <div>
           <Layout>
             {gaurdRoute}
          </Layout> 
        </div>
      ); 
  }
    
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.idToken !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck : () => dispatch(actions.checkAuthLStorage())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
