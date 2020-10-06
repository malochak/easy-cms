import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PostService {

  private baseUrl = 'localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getPosts() {
    const response = this.http.get(this.baseUrl + 'post');
    console.log(response);
  }
}
