
import React,{Component} from 'react'
import Aux from '../hoc/Auxillary'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal/Modal'
import OrderSummery from '../components/Burger/OrderSummery/OrderSummery'
import axios from '../axios-orders'
import Spinner from '../components/UI/Spiner/Spinner'
import withErrorHandler from '../hoc/withErrorHandler';
import {connect} from 'react-redux'
import * as burgerBuilderActions from '../store/actions/index'



class BurgerBuilder extends Component {

    state = {
           purchased : false,
           orderConfirmed: false,
           error :false
    }
    componentDidMount () {
     this.props.onInitIngredients();
    }

    updateHasOrderStatus = () => {
        let ingredients = this.props.ings
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
            
            
        return sum > 0
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
       

        this.props.history.push('/checkout');

      }
    render() {
    const disabledInfo = {...this.props.ings}

    for (let key in disabledInfo) {
        disabledInfo[key]= disabledInfo[key] <= 0;
    }

       

      
    let loadedBurger = (this.state.error)? <p>Some Thing is Error</p> :<Spinner/> 
    let  orderSummery = null;
    if (this.props.ings) {
         loadedBurger =  
        <Aux>
             <Burger 
             ingriedents = {this.props.ings}
             />
             <BuildControls ingredients = {this.props.ings}
                         addIngredient = {this.props.onIngredientAdded}
                         removeIngredient= {this.props.onIngredientRemoved}
                         disabledInfo = {disabledInfo}
                         price = {this.props.price}
                         hasOrder = {this.updateHasOrderStatus()}
                         ordered = {this.purchasedHandler} 
             />
        </Aux>  
         orderSummery =  <OrderSummery ingredients = {this.props.ings}
        cancelled = {this.purchaseCancelHandler}
        purchased = {this.purchaseContinueHandler}
        price = {this.props.price}
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

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price : state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved : (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients : () => dispatch(burgerBuilderActions.initIngredients())
        
     }
}



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));