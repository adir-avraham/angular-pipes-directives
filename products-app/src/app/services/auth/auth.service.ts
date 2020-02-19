import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  _id: object;
  email: string;
  password: string;
  token?: string;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  register(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
    "http://localhost:4000/register",{email: email, password: password})
  }


  login(email: string, password: string) {
    console.log(email, password)
    return this.httpClient.post<AuthResponseData> (
    "http://localhost:4000/login",{email: email, password: password})
  }



};
