import { createReducer, on } from "@ngrx/store";
import { addToCart, removeFromCart } from "./cart.actions";

export const intialState = 0;

// reducer function without props
// export const cartReducer = createReducer(
//     intialState,
//     on(addToCart,state => state+1),
//     on(removeFromCart, state => state-1)
// )

// reducer function with props
export const cartReducer = createReducer(
    intialState,
    on(addToCart,(state,props)=>{
        console.log(props);
        return state + 1;
    }),
    on(removeFromCart, (state)=>state-1)
)