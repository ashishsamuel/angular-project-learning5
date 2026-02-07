import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  http = inject(HttpClient);

  constructor() { }

  getUserDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(map((userList:any)=>userList.map(user => {
      return {
        userId: user.id,
        userName: user.name
      }
    })))
  }

  getSingleUserDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/3').pipe(map((userData:any)=>userData.address)
  )}
}
