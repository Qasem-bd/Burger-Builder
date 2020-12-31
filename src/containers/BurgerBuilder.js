
import React,{Component} from 'react'
import Aux from '../hoc/Auxillary'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal/Modal'
import OrderSummery from '../components/Burger/OrderSummery/OrderSummery'
import axios from '../axios-orders'
import Spinner from '../components/UI/Spiner/Spinner'
import withErrorHandler from '../hoc/withErrorHandler';


const INGREDIENTS_PRICES = {
    salad:0.7,
    cheese:0.8,
    meat:1.3
}
class BurgerBuilder extends Component {

    state = {
        ingredients : null,
           totalPrice: 4,
           hasOrder: false,
           purchased : false,
           orderConfirmed: false,
           error :false
    }
    componentDidMount () {
      axios.get('/ingredients.json').then(res => {
          this.setState({ingredients: res.data})
      }).catch(error => this.setState({error:true}))
    }

    updateHasOrderStatus = (actualIngtrdients) => {
        let ingredients = { ...actualIngtrdients}
        let sum = 0;
        // Maximillain method
        // let ingredientsArr = Object.keys(ingredients);
        //   sum =  ingredientsArr.map((ingred) => {
        //         return ingredients[ingred]
        //     }).reduce((sum, currentValue) =>{
        //           return sum + currentValue
        //     })

        for( let ingred in ingredients) {
            sum = sum + ingredients[ingred];
        }
            this.setState({
                hasOrder : sum > 0
            })
        
    }

    addIngredientHandler = (ingredientType) => {
        const oldCount = this.state.ingredients[ingredientType];
        const newCount = oldCount + 1;
        let actualIngtrdients = {...this.state.ingredients};
        actualIngtrdients[ingredientType]=newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICES[ingredientType];
        
        this.setState({
            ingredients: actualIngtrdients,
            totalPrice: newPrice
        })
        this.updateHasOrderStatus(actualIngtrdients);
    }

    removeIngredientHandler = (ingredientType) =>{
        const oldCount = this.state.ingredients[ingredientType];
        if (oldCount <= 0)
          return
        const newCount = oldCount - 1;
        let actualIngtrdients = {...this.state.ingredients};
        actualIngtrdients[ingredientType]=newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_PRICES[ingredientType];
        this.setState({
            ingredients: actualIngtrdients,
            totalPrice: newPrice
        })

        this.updateHasOrderStatus(actualIngtrdients);

     }  

     purchasedHandler = () =>{
         this.setState({
          purchased : true   
         })
        
     }

     purchaseCancelHandler = () => {
        
         this.setState({
            purchased : false
         })
     }    

     purchaseContinueHandler = () => {
         const queryIng = []
         for (let i in this.state.ingredients) {

             queryIng.push(encodeURIComponent(i) + '=' + encodeURIComponent( this.state.ingredients[i])) 
         }
         let passedTotalPrice = encodeURIComponent('totalPrice') + '='  + encodeURIComponent(this.state.totalPrice)
         queryIng.push(passedTotalPrice)
         const queryString = queryIng.join('&') 

        this.props.history.push({
            pathname : '/checkout',
            search : '?' + queryString
            
        });

      }
    render() {
    const disabledInfo = {...this.state.ingredients}

    for (let key in disabledInfo) {
        disabledInfo[key]= disabledInfo[key] <= 0;
    }

       

      
    let loadedBurger = (this.state.error)? <p>Some Thing is Error</p> :<Spinner/> 
    let  orderSummery = null;
    if (this.state.ingredients) {
         loadedBurger =  
        <Aux>
             <Burger 
             ingriedents = {this.state.ingredients}
             />
             <BuildControls ingredients = {this.state.ingredients}
                         addIngredient = {this.addIngredientHandler}
                         removeIngredient= {this.removeIngredientHandler}
                         disabledInfo = {disabledInfo}
                         price = {this.state.totalPrice}
                         hasOrder = {this.state.hasOrder}
                         ordered = {this.purchasedHandler} 
             />
        </Aux>  
         orderSummery =  <OrderSummery ingredients = {this.state.ingredients}
        cancelled = {this.purchaseCancelHandler}
        purchased = {this.purchaseContinueHandler}
        price = {this.state.totalPrice}
        />
    }
    if (this.state.orderConfirmed ){
        orderSummery= <Spinner/>
    }
     


        return (
            <Aux>
                <div>Burger Graphic </div>
                <Modal show = {this.state.purchased }
                    showCancel = {this.purchaseCancelHandler}>
                        
                        {orderSummery}
                </Modal>
        
                {loadedBurger}
            </Aux>
            
        );
    }
}



export default withErrorHandler(BurgerBuilder,axios);