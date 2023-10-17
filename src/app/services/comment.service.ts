import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIresponseComments } from '../types/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComments(postId: number) {
    return this.http.get<APIresponseComments>(
      `https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/${postId}/replies/?number=1`
    );
  }
}
