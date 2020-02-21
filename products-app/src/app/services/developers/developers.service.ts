import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DevelopersService {
  
  public developersUrl = "http://localhost:4000/developers"
  


  constructor(private httpClient: HttpClient) { }

  getDevelopers(): Observable<any> {
    return this.httpClient.get(this.developersUrl);
  }

}
