import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  baseUrl = 'http://localhost:5001';

  constructor(private http: HttpClient) { }

  login(username, password): Observable<any> {
    return this.http.post(this.baseUrl + '/login', {username: username, password: password});
  }

}
