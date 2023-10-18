import { Component, Input } from '@angular/core';
import { take } from 'rxjs';
import { concat } from 'rxjs/internal/observable/concat';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/types/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less'],
})
export class CommentsComponent {
  @Input() postsIds: number[];
  @Input() isLoadingPost: boolean;

  comments: Comment[] = [];
  commentError: string;
  isLoadingComment: boolean;

  constructor(private getCommentService: CommentService) {}

  getComments() {
    this.isLoadingComment = true;
    this.comments = [];

    const postsList = this.postsIds.map((id) =>
      this.getCommentService.getComments(id)
    );

    concat(...postsList)
      // .pipe(take(this.postsIds.length))
      .subscribe({
        next: (response) => {
          this.comments = [...this.comments, response.comments[0]];
        },
        error: (error) => {
          this.isLoadingComment = false;
          this.commentError = error.message;
        },
        complete: () => {
          this.isLoadingComment = false;
        },
      });
  }
}
