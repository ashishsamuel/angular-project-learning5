import { createAction, props } from "@ngrx/store";

export const loadFruits = createAction("[Fruits] Fruits Item adding to cart");

export const loadFruitsSuccess = createAction("[Fruits] Fruits are loaded successfully",props<{fruits: any[]}>())

export const loadFruitsFailure = createAction("[Fruits] Fruits loading is failed with error",props<{error:string}>())
