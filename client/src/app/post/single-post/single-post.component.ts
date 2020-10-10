import {Component, Input} from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: 'single-post.component.html'
})
export class SinglePostComponent {
  @Input() post: Post;
}
