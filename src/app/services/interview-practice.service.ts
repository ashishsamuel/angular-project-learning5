import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, map, mergeMap, retry, take, tap, toArray } from 'rxjs/operators';
import { from, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewPracticeService {

  fullName: string = "Ashish Samuel Thomson";
  
  // injecting another service inside this service file
  constructor(private apiService: ApiServiceService, private http: HttpClient) {}

  // getuserslist function for calling method in another service
  getUsersList() {
    this.apiService.getUserDetails().subscribe({
      next:(usersList)=>{
        console.log("all users details list",usersList);
      },
      error:(err)=>{
        console.log("error in api call",err);
      }
    });
  }
  allProductsList:any[]=[];

    // fucntion for getting all products list 
    getAllProductsList () {
      return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(tap((allProductList)=>{
        this.allProductsList = allProductList;
        // console.log("all products list inside tap operator", allProductList);
      }),
      map((productList:any[])=>
        productList.map((product:any)=>{
          return {
            productName: product.title,
            productPrice: product.price
          }
        })
    ))
    }
    
    // function for filtering products that are having price > 100
    getProductsPrice100() {
      return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(delay(3000),map((productList:any[])=>productList.filter((product)=>product.price>100)),
      map(product=>product.map((prod)=>({
          productName:prod.title,
          productPrice:prod.price
      })
    ))
    )
    }

    // function for getting the first 3 products from the response
    // take(n) operator will emit the first n number of values where n is th number of how many first values it should emit
    // if the observable returns a single array then the whole array will be emitted its not like it will emit the first 3 elemnts of the array take() doesnt work like that

    // getFirst3Products() {
    //   return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(take(3));
    // }
  
    // take() mainly used when the observable emits data each at a time and the count which we mention inside the take will be the number of times datas will be getting emitted
    
    // getFirst3Products() {
    //   return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(map((products:any[])=>
    //    products.slice(0,3) 
    //   ));
    // }

    // usage of take with mergemap and from operaotr 
    getFirst3Products() {
      return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(mergeMap(products=>from(products)),take(3),toArray()
    );
    }

    // usage of takeUntil() operator 
    takeUntilProductsDestroy() {
      return this.http.get<any[]>('https://fakestoreapi.com/products');
    }
      
    // distinctuntilchanged()
  // operator in rxjs used to prevent emitting duplicate consecutive values from an observable
  duplicateEmissionObservable = from([12,12,14,13,16,17,13]);

  // so in this observable the consecutive 12 wont emit as we are using distinctuntilcahnged operator
  
  duplicateEmissionObservableFunction() {
    return this.duplicateEmissionObservable.pipe(distinctUntilChanged());
  }

  // retry operator
  // due to some issues if an api call is failed then if we want to trigger the same api then we use the retry operator and we specify the count like how many times again it needs to be retried retry(3)
  // retry operator automatically retries failed API calls
// retry operator accepts either count or an object with count and deplay paramters if we give delay then after that much time again the api will recalled
// retry({
  // count:2,
  // delay:1000
// })

// retry
getFirst3ProductsRetry() {
      return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(retry(2),map((products:any[])=>
       products.slice(0,3) 
      ));
    }

    // switchmap() operator
    // function for search api call
    fetchSearchResults(searchtext:string) {
      return of(this.allProductsList).pipe(map(productList=>productList.filter(product=>{
        // console.log("products",product);
        return product.title.toLowerCase().startsWith(searchtext.toLowerCase())
      }
    )))
    }

    // mergemap operator 
    mergeMapProductDetails(ids:number[]){
      return from(ids).pipe(
        mergeMap(id=> this.http.get<any>(`https://fakestoreapi.com/products/${id}`)),
        toArray()
      )
    }

    // concatmap operator
    concatMapProductDetails(ids:number[]) {
      return from(ids).pipe(
        concatMap(id=>this.http.get<any>(`https://fakestoreapi.com/products/${id}`)
      ),toArray()
      )
    }

    // exhaustmap operator
    productTrigger$ = new Subject();
    exhaustMapProductDetails() {
      return this.productTrigger$.pipe(exhaustMap(id=>this.http.get<any>(`https://fakestoreapi.com/products/${id}`)))
    }
    

    // catcherror and forkjoin


    // subjects in angular

    user$ = new Subject<any>();

    emitValueToSubject(value:any){
      // console.log("value",value);
      
      this.user$.next(value);
    }

    fetchValueFromSubject() {
      return this.user$;
    }

    // canactivate guard execution
    isUserLoggedIn:boolean = true;

    // canactivate child guard demo
    isUserLoggedInChild = false;
}
