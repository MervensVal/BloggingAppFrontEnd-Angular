import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userAuthInfo: {userName:string, password:string}|null=null
  message:string=''
  success:boolean=true;

  constructor(private userSvc:UserserviceService, private router:Router) { }

  ngOnInit(): void {
  }

}
