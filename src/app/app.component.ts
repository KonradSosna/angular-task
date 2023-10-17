import { Component } from '@angular/core';
import { Post } from './types/post';
import { PostService } from './services/post.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  posts: Post[];
  postError: string;
  postsIds: number[];
  isLoadingPost: boolean;

  constructor(private getPostsService: PostService) {}

  ngOnInit() {
    this.isLoadingPost = true;
    this.getPostsService
      .getPosts()
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.posts = data.posts;
        },
        error: (error) => {
          this.isLoadingPost = false;
          this.postError = error.message;
          console.log(error);
        },
        complete: () => {
          this.isLoadingPost = false;
          this.postsIds = this.posts.map((post) => post.ID);
        },
      });
  }
}
