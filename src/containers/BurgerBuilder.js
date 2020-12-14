
import React,{Component} from 'react'
import Aux from '../hoc/Auxillary'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal/Modal'
import OrderSummery from '../components/Burger/OrderSummery/OrderSummery'
import axios from '../axios-orders'


const INGREDIENTS_PRICES = {
    salad:0.7,
    cheese:0.8,
    meat:1.3
}
class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad :0,
            cheese: 0,
            meat :0
           },
           totalPrice: 4,
           hasOrder: false,
           purchased : false
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
          
        this.setState({ 
            purchased : false
         })

        const toSendOrder = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                name : 'Qasem Bdier',
                address : {
                    street: 'Henkelterosol 13',
                    zipCode: '69123',
                    country : 'Germany'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod : 'fastest'
        }
        axios.post('/orders.json',toSendOrder).
        then (response => { console.log(response) })
        .catch(error => console.log(error))
     }
    render() {
    const disabledInfo = {...this.state.ingredients}

    for (let key in disabledInfo) {
        disabledInfo[key]= disabledInfo[key] <= 0;
    }

        return (
            <Aux>
            <div>Burger Graphic </div>
            <Burger 
             ingriedents = {this.state.ingredients}
            />
            <Modal show = {this.state.purchased}
                   showCancel = {this.purchaseCancelHandler}>
              <OrderSummery ingredients = {this.state.ingredients}
                             cancelled = {this.purchaseCancelHandler}
                             purchased = {this.purchaseContinueHandler}
                             price = {this.state.totalPrice}
                             />
            </Modal>
            <BuildControls ingredients = {this.state.ingredients}
                           addIngredient = {this.addIngredientHandler}
                           removeIngredient= {this.removeIngredientHandler}
                           disabledInfo = {disabledInfo}
                           price = {this.state.totalPrice}
                           hasOrder = {this.state.hasOrder}
                           ordered = {this.purchasedHandler} 
            />

            </Aux>
            
        );
    }
}



export default BurgerBuilder;