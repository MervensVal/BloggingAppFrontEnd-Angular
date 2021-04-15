import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
userIsLoggedIn:boolean = false;

@Output() UserStateChanged = new EventEmitter<boolean>();

//dependency injection at work maybe
  constructor(private httpC: HttpClient) { }

  CreateUser(userData:User)
  {
    return this.httpC.post<User>(`${environment.BASE_URL}/Users`,userData);
  }

  
  Login(userName:string, password:string)
  {
    return this.httpC.get<{token:string}>(`${environment.BASE_URL}/Users/${userName}/${password}`);
  }

  SetUserLoggedIn(userToken:{token:string})
  {
    localStorage.setItem('token',JSON.stringify(userToken));
    this.UserStateChanged.emit(true);
  }

  SetUserAsLoggedOff()
  {
    localStorage.removeItem('token');
    this.UserStateChanged.emit(false);
  }

  GetLoggedInUser()
  {
    let tokenString= localStorage.getItem('token');
    if(tokenString!==null)
    {
      let tokenObj = JSON.parse(tokenString) as {token:string};
      let tokenInfo =<Token>jwt_decode(tokenObj.token);
      console.log(tokenInfo);
      return tokenInfo;
    }
    else
      return null;
  }
  
}
