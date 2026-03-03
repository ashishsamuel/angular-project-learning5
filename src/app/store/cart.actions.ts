import { createAction, props } from "@ngrx/store";

// action without props
// export const addToCart = createAction('[Item] Add to Cart');

// action with props
export const addToCart = createAction("[Item] Add to Cart",props<{message:string}>());
export const addProductsToCart = createAction("[Item] Add Products to Cart",props<{item:any}>());
export const removeFromCart = createAction('[Item] Remove from Cart');
