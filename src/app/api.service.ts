import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl='https://jsonplaceholder.typicode.com';

  post(url:string,data={}){
    return this.http.post(`${this.baseUrl}${url}`,data)
  }

  get(url:string){
    return this.http.get(`${this.baseUrl}/${url}`)
  }
  
}
