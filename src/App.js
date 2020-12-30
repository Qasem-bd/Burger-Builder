import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Training from './Training/Training'
import Checkout from './containers/Checkout/Checkout'



function App() {
  return (
    <div>
      {/* <Training/> */}
       <Layout>
       <BurgerBuilder/>   
       <Checkout/>
      </Layout> 
    </div>
  );   
}

export default App;
