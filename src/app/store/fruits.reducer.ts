import { createReducer, on } from "@ngrx/store";
import { loadFruits, loadFruitsSuccess } from "./fruits.action";
import { AppState, ItemFruitState } from "./app.state";

export const initialState: ItemFruitState = {
    fruits:[]
};

export const fruitsReducer = createReducer(
    initialState,
    on(loadFruitsSuccess,(state,{fruits})=>{
        return {...state,
            fruits:fruits
        }
    })
)