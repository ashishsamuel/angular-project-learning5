import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  http = inject(HttpClient);

  allUsersDataList:WritableSignal<any> = signal(null);

  constructor() {}

  getUserDetails() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap(userList=>{
        console.log("full userList inside tap operator", userList);
        this.allUsersDataList.set(userList);
      }),
      map((userList: any) =>
        userList.map((user) => {
          return {
            userId: user.id,
            userName: user.name,
          };
        }),
      ),
    );
  }

  getSingleUserDetails() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users/3')
      .pipe(
        tap(singleUser=>{
          console.log("Full details of a single user",singleUser);       
        }),
        map((userData: any) => userData.address));
  }
}
