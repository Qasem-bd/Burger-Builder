import logo from './logo.svg';
import Training from './Training/Training'
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/auth'
import Logout from './containers/Auth/Logout/Logout'
import {Route,Switch,withRouter} from 'react-router-dom';
import * as actions from './store/actions/index'
import {connect} from 'react-redux'
import { Component } from 'react';



class App extends Component {
 
  componentDidMount () {
    this.props.onAuthCheck();
  }
    render () {
      return (
        <div>
          {/* <Training/> */}
           <Layout>
           {/* <BurgerBuilder/>   
           <Checkout/> */}
           <Switch>
              <Route path = '/orders' component = {Orders}/>
              <Route path = '/checkout' component = {Checkout}/>
              <Route path = '/auth' component = {Auth}/>
              <Route path = '/logout' component = {Logout}/>
              <Route path = '/' component = {BurgerBuilder}/>
           </Switch>
          </Layout> 
        </div>
      ); 
  }
    
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck : () => dispatch(actions.checkAuthLStorage())
  }
}

export default connect(null,mapDispatchToProps) (App);
