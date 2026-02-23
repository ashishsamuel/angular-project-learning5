import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { filter, map, tap } from 'rxjs';

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

    // fucntion for getting all products list 
    getAllProductsList () {
      return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(tap((allProductList)=>{
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
      return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(map((productList:any[])=>productList.filter((product)=>product.price>100)),
      map(product=>product.map((prod)=>{
        return {
          productName:prod.title,
          productPrice:prod.price
        }
      }))
    )
    }
  
      


}
