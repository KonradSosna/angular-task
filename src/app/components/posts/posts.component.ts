import { Component, Input } from '@angular/core';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less'],
})
export class PostsComponent {
  @Input() posts: Post[];
  @Input() postError: string;
  @Input() isLoadingPost: boolean;
}
