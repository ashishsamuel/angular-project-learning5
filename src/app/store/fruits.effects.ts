import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadFruits, loadFruitsFailure, loadFruitsSuccess } from "./fruits.action";
import { NgrxApiService } from "../services/ngrx-api.service";
import { catchError, delay, map, mergeMap, of } from "rxjs";

@Injectable()
export class FruitsEffects {

    constructor(private actions:Actions, private ngrxService: NgrxApiService){}

    // createEffect method used to create a effect means for creating side effects
    // ofType() method we used to check the type of the action that has been dispatched
    loadFruitsObs = createEffect(()=>
        this.actions.pipe(ofType(loadFruits),
        mergeMap(()=>
        this.ngrxService.fetchFruits().pipe(delay(3000),map(fruitsList=>{
            console.log("fruitslist in fruits effect",fruitsList);
            
            return loadFruitsSuccess({fruits:fruitsList})}),
        catchError((error)=>of(loadFruitsFailure({error})))
    ))
)
    )
}