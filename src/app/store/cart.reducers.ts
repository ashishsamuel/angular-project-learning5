import { createReducer, on } from "@ngrx/store";
import { addProductsToCart, addToCart, removeFromCart } from "./cart.actions";
import { AppState } from "./app.state";

// export const intialState = 0;

export const initialCartState:AppState = {
    cartCount:0,
    cartProductsList: {
        cart:[]
    },
    fruitsList: {
        fruits:[]
    },
    vegetableList:{
        vegetables:[]
    }
};

// reducer function without props
// export const cartReducer = createReducer(
//     intialState,
//     on(addToCart,state => state+1),
//     on(removeFromCart, state => state-1)
// )

// reducer function with props
export const cartReducer = createReducer(
    initialCartState.cartCount,
    on(addToCart,(state,props)=>{
        console.log(props);
        return state + 1;
    }),
    on(removeFromCart, (state)=>state-1)
)

export const productsCartReducer = createReducer(
    initialCartState.cartProductsList,
    on(addProductsToCart,(state,item)=>{
        console.log("state",state);
        
        console.log("item added to cart",item);
        
        return {...state,cart:[...state.cart,item]}
    })
)