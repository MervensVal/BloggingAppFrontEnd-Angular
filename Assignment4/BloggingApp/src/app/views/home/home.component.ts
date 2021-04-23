import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postArr:Post[]=[ ];
  constructor(private postSVC:PostserviceService) {
    this.postSVC.GetPosts().subscribe((postArray)=>{
      this.postArr = postArray;
     console.log(this.postArr);
    },(err)=>{
     console.log(err);
    });
  }
  ngOnInit(): void {
  }
}
