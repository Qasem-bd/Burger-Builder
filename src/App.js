import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Training from './Training/Training'



function App() {
  return (
    <div>
      {/* <Training/> */}
       <Layout>
       <BurgerBuilder/>   
      </Layout> 
    </div>
  );   
}

export default App;