import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  post(data:any){
    localStorage.setItem('datalist',JSON.stringify(data))
  }

  get(){
    return JSON.parse(localStorage.getItem('datalist')||'false')
  }

  
  
  
}
