import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userAuthInfo: {userId:string, password:string}|null=null;
  message:string='';
  success:boolean=true;

  constructor(private userSvc:UserserviceService, private router:Router, private route:ActivatedRoute) { 
    this.userAuthInfo= {userId:'', password:''};
    if(this.route.snapshot.paramMap.get('msg'))
    {
      this.message = this.route.snapshot.paramMap.get('msg') as string;
    }
  }

  

  ngOnInit(): void {
  }

  LoginUser()
  {
    if(this.userAuthInfo?.userId!==undefined && this.userAuthInfo.password!=undefined)
    {
      this.userSvc.Login(this.userAuthInfo?.userId, this.userAuthInfo?.password).subscribe((response)=>{

        this.userSvc.SetUserLoggedIn(response);
        this.router.navigate(['/home']);
      }, (error)=>{
        this.success=false;
        this.message = "User does not exist";
      })
    }
  }
}
