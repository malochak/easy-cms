import {Component, Injectable} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
@Injectable()
export class ContentComponent {

  constructor(private postService: PostService) {
    postService.getPosts();
  }
}
