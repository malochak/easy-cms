import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../post/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {
    postService.getPosts().then((data: Post[]) => this.posts = data);
  }

  ngOnInit(): void {
  }

}
