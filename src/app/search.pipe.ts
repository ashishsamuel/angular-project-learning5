import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user/user.component';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(userList: User[],searchValue:string): User[] {
    console.log("full users array and the searchValue",userList," and ",searchValue);

    if(!userList)
      return [];

    if(!searchValue)
      return userList;
      
      return userList.filter(((user:User)=>{
        return user.name.toLowerCase().includes(searchValue.toLowerCase());
      }))
    }

    
  }

