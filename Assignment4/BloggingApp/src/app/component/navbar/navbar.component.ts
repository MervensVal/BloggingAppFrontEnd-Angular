import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token.model';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userIsLoggedIn= false;
  currentUser: Token|null=null;
  constructor(private userSvc: UserserviceService, private router:Router) {

    let userLoggedIn = this.userSvc.GetLoggedInUser();
    if(userLoggedIn!=null)
    {
      this.userIsLoggedIn = true;
      this.currentUser = userLoggedIn;
    }
    this.userSvc.UserStateChanged.subscribe((userLoggedInMsg)=>{
      this.userIsLoggedIn = userLoggedInMsg!==null;
      this.currentUser = userLoggedIn;
    })
  }
  ngOnInit(): void {
  }

  LogoutUser()
  {
    this.userSvc.SetUserAsLoggedOff();
    this.userIsLoggedIn=false;
    this.router.navigate(['/login']);
  }
}
