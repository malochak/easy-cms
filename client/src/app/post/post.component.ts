import { Component, OnInit } from '@angular/core';
import {Post} from './post.model';
import {Observable} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postsList: Post[] = [];

  constructor(private postService: PostService) {
    this.getPostsFromDb(postService);
  }

  ngOnInit(): void {
  }

  private getPostsFromDb(postService: PostService): void {
    const response: Observable<Post[]> = postService.getPosts();
    response.subscribe((data: Post[]) => this.postsList = data);
  }
}

