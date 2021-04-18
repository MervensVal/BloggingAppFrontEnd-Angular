import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private httpC: HttpClient) { }

  GetBooks(){
    return this.httpC.get<Post[]>('${environment.BASE_URL}/Posts')
  }
}
