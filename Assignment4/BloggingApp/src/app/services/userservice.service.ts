import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import { environment } from 'src/environments/environment';

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
}
