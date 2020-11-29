import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../post/post.model';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {
    const id = EditPostFormComponent.getIdFromRoute(route);
    postService.getPost(id).then((data: Post) => this.post = data);
  }

  private static getIdFromRoute(route: ActivatedRoute): number {
    return Number.parseFloat(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

  }

  updatePost($event: MouseEvent): void {
    $event.preventDefault();

    this.postService.createPost(this.post)
      .toPromise()
      .then(() => {
        this.error = this.defaultError;
        if (!this.router.navigate(['/'])) {
          this.error.navigation = 'Cannot navigate to main page after successful post sending.';
        }
      })
      .catch(err => this.error = err.error);
  }

}
