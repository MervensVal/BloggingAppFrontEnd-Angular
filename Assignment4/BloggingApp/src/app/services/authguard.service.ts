import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,UrlTree } from '@angular/router';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private userSrv:UserserviceService, private router:Router) { 
    /*
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{ 
      let userInfo = this.userSrv.GetLoggedInUser
    }*/
  }
}
