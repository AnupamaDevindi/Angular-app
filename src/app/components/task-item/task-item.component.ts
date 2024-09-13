import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  fatimes = faTimes;

  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any){
    this.onToggleReminder.emit(task);
  }
  
  constructor(){

  }

  ngOnInit(): void {
    
  }
}
