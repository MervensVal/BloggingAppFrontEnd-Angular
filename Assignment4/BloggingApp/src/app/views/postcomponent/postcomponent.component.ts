import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit {

  @Input() postObj: Post | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
