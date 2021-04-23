import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { Token } from 'src/app/models/token.model';
import { PostserviceService } from 'src/app/services/postservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit {

//----------Copied from the nav bar---------
  userIsLoggedIn= false;
  currentUser: Token|null=null;
  postInfo: Post|null=null;
  date: Date = new Date(); 

  message:string='';
  success:boolean=true;

  constructor(private userSvc: UserserviceService, private router:Router, private postSVC:  PostserviceService) {

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

    this.postInfo = new Post(0,this.date,'','','','',this.date);
  }
  //-----------------------------------------

  CreatePosts(){
    if(this.postInfo != null){
      this.postSVC.CreatePosts(this.postInfo);
      this.success = true;
      this.message=`The Post has been created successfully!`;
    }else{
      this.success = false;
     // this.message=``;
     // this.message=`Error detected, The Post has not been created!`;

    }
      
  }

  ngOnInit(): void {
  }

}
