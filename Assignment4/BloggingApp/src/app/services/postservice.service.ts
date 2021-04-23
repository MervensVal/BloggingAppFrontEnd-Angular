import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private httpC: HttpClient) { }

  CreatePosts(postsData:Post)
  {
    return this.httpC.post<Post>(`${environment.BASE_URL}/Posts`,postsData);
  }

  GetPosts(){
    return this.httpC.get<Post[]>('${environment.BASE_URL}/Posts')
  }
}
