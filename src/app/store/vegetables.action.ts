import { createAction, props } from "@ngrx/store";

export const loadVegetables = createAction("[Vegetables] Vegetable Item adding to cart");

export const loadFruitsSuccess = createAction("[Vegetables] Vegetables are loaded successfully",props<{vegetables: any[]}>())

export const loadFruitsFailure = createAction("[Vegetables] Vegetables loading is failed with error",props<{error:string}>())
