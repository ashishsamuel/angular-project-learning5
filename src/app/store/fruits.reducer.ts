import { createReducer, on } from "@ngrx/store";
import { loadFruits } from "./fruits.action";

export const initialState = {
    fruits: [],
    vegetables: []
};

export const fruitsReducer = createReducer(
    initialState,
    on(loadFruits,(state,fruitsList)=>{
        return {...state,
            fruits:[...state.fruits,fruitsList]
        }
    })
)