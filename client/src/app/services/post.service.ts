import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PostService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    return this.http.get(this.baseUrl + 'post');
  }

  createPost(post: object): void {
    const response = this.http.post(this.baseUrl + 'post', post)
      .toPromise()
      .then(data => console.log('DATA - ', data))
      .catch( error => console.log('ERROR - ', error));
    console.log('PostService - ', response);
  }
}
