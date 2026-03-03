import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectCart = (state:AppState) => state.cartProductsList;

// if we need to access a specific portion of the state we can achieve this using the createselector() function

export const selectCartQuantity = createSelector(selectCart,(state)=> {
    return state.cart.length;
})