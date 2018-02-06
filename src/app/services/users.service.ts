import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../user';
import {base64} from 'file-base64';
import { environment } from '../../environments/environment';


@Injectable()
export class UsersService {

    usersUrl = `http://${environment.url}/users`;

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl).catch(this._serverError);
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
        return this.http.get( `${this.usersUrl}/mails`).catch(this._serverError);
    }

    upload(file: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');

        const form = new FormData();
        form.append('file', file);

        return this.http.post(this.usersUrl + '/upload', form, {headers: headers}).catch(this._serverError);
    }

    private _serverError(err: any) {
        if (err instanceof HttpErrorResponse) {
            return Observable.throw(err.error || 'backend server error');
        }
        return Observable.throw(err || 'backend server error');
    }


    createUser(user: User): Observable<any> {
        // const headers = new HttpHeaders();
        // const  token = localStorage.getItem('token');
        // console.log(token);
        // headers.append('Authorization', 'Bearer ' + token);
        // console.log(headers);
        return this.http.post(this.usersUrl, user).catch(this._serverError);
    }

    deleteUser(userId: number): Observable<any> {
        return this.http.delete(this.usersUrl + `/${userId}`);
    }
}
