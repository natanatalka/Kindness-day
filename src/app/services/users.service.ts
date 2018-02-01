import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../user';


@Injectable()
export class UsersService {

  usersUrl = `http://localhost:5001/users`;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.usersUrl + `/${id}`)
      .map((res: any) => res.data);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(this.usersUrl + `/${id}`, user).catch(this._serverError);
  }

  sendMail(id: number): Observable<any> {
    return this.http.get(this.usersUrl + `/mail/${id}`).catch(this._serverError);
  }

  sendAllMails(): Observable<any> {
    return this.http.get(this.usersUrl + `/mails`).catch(this._serverError);
  }
  //
  // upload() : Observable<any> {
  //   // return this.http.
  // }

  private _serverError(err: any) {
    if (err instanceof HttpErrorResponse) {
      return Observable.throw(err.error || 'backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }


  createUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl, user).catch(this._serverError);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(this.usersUrl + `/${userId}`);
  }
}
