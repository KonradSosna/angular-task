import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIresponsePosts } from '../types/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  readonly API_URL =
    'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com';

  getPosts() {
    return this.http.get<APIresponsePosts>(this.API_URL + '/posts/?number=3');
  }
}
