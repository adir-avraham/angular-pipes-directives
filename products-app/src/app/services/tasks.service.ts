import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public addTaskUrl = "http://localhost:4000/addTask";

  constructor(private httpClient: HttpClient) { }


  addTask(task: any): Observable<object> {
    return this.httpClient.post<object>(this.addTaskUrl, task);
  }


}
