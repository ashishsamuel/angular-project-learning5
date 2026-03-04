import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const fruitsSelect = (state:AppState)=>{
    console.log("state of fruits",state);
    return state.fruitsList;
}

export const fruitsListSelector = createSelector(fruitsSelect,(state)=>{
    return state.fruits;
})