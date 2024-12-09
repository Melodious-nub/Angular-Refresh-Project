import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseApi: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.baseApi+'users');
  }

  createUser(data: any) {
    return this.http.post<any>(this.baseApi+'users', data);
  }

}
