import { createReducer, on } from "@ngrx/store";
import { loadVegetables } from "./vegetables.action";

export const initialState = {
    fruits: [],
    vegetables: []
};

export const VegetablesReducer = createReducer(
    initialState,
    on(loadVegetables,(state,vegetablesList)=>{
        return {...state,vegetables:[...state.vegetables,vegetablesList]}
    })
)