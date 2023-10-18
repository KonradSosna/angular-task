import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIresponsePosts } from '../types/post';

import { environment } from '../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<APIresponsePosts>(
      environment.apiHost + '/posts/?number=3'
    );
  }
}
