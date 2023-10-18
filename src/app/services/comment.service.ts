import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIresponseComments } from '../types/comment';
import { environment } from '../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(postId: number) {
    return this.http.get<APIresponseComments>(environment.getUrl(postId));
  }
}
