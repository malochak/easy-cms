import {Component, OnInit} from '@angular/core';
import {Post} from './post.model';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postsList: Post[] = [];

  constructor(private postService: PostService) {
    postService.getPosts().then((data: Post[]) => this.postsList = data);
  }

  ngOnInit(): void {
  }

}

