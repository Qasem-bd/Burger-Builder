import logo from './logo.svg';
import Training from './Training/Training'
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/auth'
import Logout from './containers/Auth/Logout/Logout'
import {Route,Switch} from 'react-router-dom';



function App() {
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

export default App;
