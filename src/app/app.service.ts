import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http
      .get('http://localhost:4800/api/user/')
      .pipe(catchError(this.HandleError));
  }
  public getOne(id: any): Observable<any> {
    return this.http
      .get(`http://localhost:4800/api/user/${id}`)
      .pipe(catchError(this.HandleError));
  }

  public add(data: any): Observable<any> {
    return this.http
      .post('http://localhost:4800/api/user/studentdetail', data)
      .pipe(catchError(this.HandleError));
  }
  private HandleError(error: HttpErrorResponse): any {
    return throwError(() => error);
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http
      .patch(`http://localhost:4800/api/user/studentdetail/${id}`, data)
      .pipe(catchError(this.HandleError));
    // return this.http.patch(`${this.baseURL}/update/${id}`, data);
  }

  put(data: any, id: string): Observable<any> {
    return this.http
      .put(`http://localhost:4800/api/user/studentput/${id}`, data)
      .pipe(catchError(this.HandleError));
  }

  deleteData(id: string): Observable<any> {
    return this.http
      .delete(`http://localhost:4800/api/user/student/${id}`)
      .pipe(catchError(this.HandleError));
  }

  public adduser(data: any): Observable<any> {
    return this.http
      .post('http://localhost:4800/api/user/register', data)
      .pipe(catchError(this.HandleError));
  }

  public getproduct(): Observable<any> {
    return this.http
      .get('https://dummyjson.com/products')
      .pipe(catchError(this.HandleError));
  }

  public addloginuser(data: any): Observable<any> {
    return this.http
      .post('http://localhost:4800/api/user/login/me', data)
      .pipe(catchError(this.HandleError));
  }

  public resetpass(data: any): Observable<any> {
    return this.http
      .post('http://localhost:4800/api/user/resetpassword', data)
      .pipe(catchError(this.HandleError));
  }

  public productadd(data: any): Observable<any> {
    return this.http
      .post('http://localhost:4800/api/blog/addproduct', data)
      .pipe(catchError(this.HandleError));
  }

  public profileShow(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http
      .get('http://localhost:4800/api/user/profile/me', {
        headers: headers,
      })
      .pipe(catchError(this.HandleError));
  }

  public getcountries(): Observable<any> {
    return this.http
      .get('http://192.168.1.54:8001/countries')
      .pipe(catchError(this.HandleError));
  }

  public getstate(countries: any): Observable<any> {
    return this.http
      .get(`http://192.168.1.54:8001/countries/state?country=${countries}`)
      .pipe(catchError(this.HandleError));
  }

  public getcitystate(countries: any, state: any): Observable<any> {
    return this.http
      .get(
        `http://192.168.1.54:8001/countries/city?country=${countries}&state=${state}`
      )
      .pipe(catchError(this.HandleError));
  }
}


