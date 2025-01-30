import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private Http:HttpClient) 
  { 

  }

  apiUrl = 'https://localhost:7248/api';

  signup(data:any):Observable<any>
  {
    const response = this.Http.post(`${this.apiUrl}/Signup`, data);
    return response;
  }

  login(data:any):Observable<any>
  {
    const response = this.Http.post(`${this.apiUrl}/Signup/login`, data);
    return response;
  }
  getAllEmployees()
  {
    const response = this.Http.get(`${this.apiUrl}/Employee`);
    return response;
  }
}
