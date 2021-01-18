
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
import * as actionTypes from '../store/actions'



class BurgerBuilder extends Component {

    state = {
        
           totalPrice: 4,
           purchased : false,
           orderConfirmed: false,
           error :false
    }
    componentDidMount () {
        // axios.get('/ingredients.json').then(res => {
        //     this.setState({ingredients: res.data})
        // }).catch(error => this.setState({error:true}))
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
        onIngredientAdded : (ingName) => dispatch({type : actionTypes.ADD_INGREDIENT, ingredientName : ingName}),
        onIngredientRemoved : (ingName) => dispatch({type : actionTypes.REMOVE_INGREDIENT, ingredientName : ingName})
        
     }
}



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));