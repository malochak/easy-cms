import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  title: string;
  author: string;
  content: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  sendPost(event: Event): void {
    event.preventDefault();
    const newPost = {
      title: this.title,
      author: this.author,
      content: this.content
    };

    this.postService.createPost(newPost);
  }

}
