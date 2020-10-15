import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Post} from '../post/post.model';

@Injectable()
export class PostService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private router: Router) {
  }

  async getPosts(): Promise<object> {
    return await this.http.get(this.baseUrl + 'post').toPromise();
  }

  createPost(post: object): Observable<any> {
    return this.http.post(this.baseUrl + 'post', post);
  }
}
