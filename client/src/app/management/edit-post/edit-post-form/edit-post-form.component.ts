import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../post/post.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-post-form',
  templateUrl: './edit-post-form.component.html',
  styleUrls: ['./edit-post-form.component.css']
})
export class EditPostFormComponent implements OnInit {

  post: Post = {id: -1, title: '', author: '', content: '', creationDate: null, updateDate: null};

  error = {
    navigation: '',
    title: '',
    author: '',
    content: ''
  };

  defaultError = {
    navigation: '',
    title: '',
    author: '',
    content: ''
  };

  constructor(postService: PostService, route: Router) {
    const id = 2; // Todo ~ get post id from route path
    postService.getPost(id).then((data: Post) => this.post = data);
  }

  ngOnInit(): void {
  }

  updatePost($event: MouseEvent): void {
    $event.preventDefault();
    console.log(this.post);
  }
}
