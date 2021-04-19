import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { Token } from 'src/app/models/token.model';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit {

  @Input() postObj: Post | undefined;
//----------Copied from the nav bar---------
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
  //-----------------------------------------

  ngOnInit(): void {
  }

}
