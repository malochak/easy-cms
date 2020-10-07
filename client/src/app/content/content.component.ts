import {Component, Injectable} from '@angular/core';
import {PostService} from '../services/post.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
@Injectable()
export class ContentComponent {
  posts: any;

  constructor(private postService: PostService) {
    const response: Observable<any> = postService.getPosts();
    response.subscribe(data => {
      this.posts = data;
    });
    console.log(this.posts);
  }
}
