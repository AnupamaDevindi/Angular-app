import { Injectable } from '@angular/core';
import { subtle } from 'crypto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleAddTask(): void {
    this.showAddTask =!this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggleAddTask(): Observable<any> {
    return this.subject.asObservable();
  }
}
