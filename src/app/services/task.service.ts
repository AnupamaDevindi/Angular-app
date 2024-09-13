import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 

  private tasksUrl = 'http://localhost:5000/tasks';  // URL to web api
  constructor(private http:HttpClient) {

   }

   updateTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Task>(url, task, httpOptions);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  deletedTask(task: Task): Observable<Task[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.delete<Task[]>(url, { headers });
}

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions);
  }
}
