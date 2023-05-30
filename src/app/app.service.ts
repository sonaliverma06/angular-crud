import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
  
}