import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../post/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  posts: Post[] = [];

  constructor(private postService: PostService) {
    postService.getPosts().then((data: Post[]) => this.posts = data);
  }

  deletePost(id: number, event: any): void {
    event.preventDefault();
    this.posts = this.posts.filter(el => el.id !== id);
    this.postService.deletePost(id).toPromise().catch(err => console.error(err));
  }

}
