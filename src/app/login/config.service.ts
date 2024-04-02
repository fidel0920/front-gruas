import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authlogin } from "../services/login";
import { ResponseI } from "../services/response";
import {  } from "@angular/forms";

@Injectable(
  {providedIn: 'root'}
)
export class ConfigService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/user/login'

  getUsers(form:authlogin):Observable<ResponseI>{
    let direction = this.url
    return this.http.post<ResponseI>(direction,form)
  };
  

}

