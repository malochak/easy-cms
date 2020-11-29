import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class PostService {

  private baseUrl = 'http://localhost:8080/api/post';

  constructor(private http: HttpClient, private router: Router) {
  }

  async getPost(id: number): Promise<object> {
    return await this.http.get(this.baseUrl + '/' + id).toPromise();
  }

  async getPosts(): Promise<object> {
    return await this.http.get(this.baseUrl).toPromise();
  }

  createPost(post: object): Observable<any> {
    return this.http.post(this.baseUrl, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
