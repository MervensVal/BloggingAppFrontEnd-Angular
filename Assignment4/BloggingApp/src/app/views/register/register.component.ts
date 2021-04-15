import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import {User} from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //userInfo: {userId:string, firstName:string, lastName:string, emailAddress:string, password:string}|null=null;
  userInfo:User|null=null;
  message:string = '';
  success:boolean = true;

  // constructor() { 
  //   this.userInfo = {userId :'', firstName:'', lastName:'', emailAddress:'', password:''};
  // }

  constructor(private userSvc:UserserviceService){
    this.userInfo = new User('','','','','',);
  }

  ngOnInit(): void {
  }

  CreateUser()
  {
    if(this.userInfo!==null){
      this.userSvc.CreateUser(this.userInfo).subscribe((response)=>{
        this.success =true;
        this.message= `The User ${response.userId} has been created!`
      },(error)=>{
        this.success =false;
        this.message = error.error.messsage;
      })
    }
  }
}
