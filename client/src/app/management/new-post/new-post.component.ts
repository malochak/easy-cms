import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private route: Router) {
  }

  title: string;
  author: string;
  content: string;

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

  ngOnInit(): void {
  }

  sendPost(event: Event): void {
    event.preventDefault();
    const newPost = {
      title: this.title,
      author: this.author,
      content: this.content
    };

    this.postService.createPost(newPost)
      .toPromise()
      .then(() => {
        this.error = this.defaultError;
        if (!this.route.navigate(['/'])) {
          this.error.navigation = 'Cannot navigate to main page after successful post sending.';
        }
      })
      .catch(err => this.error = err.error);

    console.log('err', this.error);
  }
}
