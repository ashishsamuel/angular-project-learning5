import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const fruitsSelect = (state:any)=>{
    console.log("state of fruits",state.fruitsList.fruits);
    
}

export const fruitsListSelector = createSelector(fruitsSelect,(state)=>{
    return state;
})