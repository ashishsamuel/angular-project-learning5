import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    // fetching route parameter using snapshot property applicable only for static if we change the user suppose from id 3 to 4 then new id value will become 4 but snapshot property wont be able to get the changed id
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log("id fetched from the route's parameter",id);

    // fetching route parameter using paramMap property as this is also useful in case when id values are updated dynamically 
    this.route.paramMap.subscribe((routeId)=>{
      // const id = routeId['params'].id;
      const id = routeId.get('id');
      console.log("id that have logged",id);
    })
    
    // for accesing the query parameters we will be using the following methods
    // 1. queryParamMap
    // 2. snapshot
    console.log("this.route.snapshot.queryParamMap.get('name')",this.route.snapshot.queryParamMap.get('name'));
    
    // this will return the value of the name key in the query parameter
    this.route.snapshot.queryParamMap.get('name');
    // if we didnt provide any value then null will be returned from the queryparammap
    this.route.snapshot.queryParamMap.get('');

    console.log("this.route.snapshot.queryParamMap.get('')",this.route.snapshot.queryParamMap.get(''));
    
    // 1.queryParamMap if we use queryparammap we get an object paramasmap inside we get the params object from which we want to access the param value later 
    this.route.queryParamMap.subscribe((queryParam)=>{
      console.log("accessing queryparameters suing queryparamamp",queryParam);
      console.log("accessing queryparameter name suing queryparamamp",queryParam.get('name'));
      console.log("accessing queryparameter emailid suing queryparamamp",queryParam.get('emailid'));
    })

    // if we use queryparams then we are able to get the data object directly as an object
    this.route.queryParams.subscribe((queryParam)=>{
      console.log("queryParam",queryParam);     
    })

    // dynmaic change in the queryparameter can be easily handled if we use queryparams or queryparammap property instead of the snapshot property

    // fragments in route
    
  }
}
