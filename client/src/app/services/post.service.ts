import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class PostService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient, private router: Router) {
  }

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl + 'post');
  }

  createPost(post: object): void {
    const response = this.http.post(this.baseUrl + 'post', post)
      .toPromise()
      .then( () => this.router.navigate(['/']))
      .catch(error => console.log('ERROR - ', error));
    // todo implement error handling
    console.log('PostService - ', response);
  }
}
