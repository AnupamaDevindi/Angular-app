import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
onToggleReminder(_t3: Task) {
throw new Error('Method not implemented.');
}

  tasks: Task[] = [];  

  constructor(private taskService: TaskService) {
    
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService.deletedTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id!== task.id)));
  
}

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((t: Task) => this.tasks.push(t));
  }

  // updateTask(task: Task): void {
  //   this.taskService.updateTask(task).subscribe(() => console.log('Task updated'));
  // }

  // onSort(property: string): void {
  //   this.tasks.sort((a, b) => (a[property] > b[property])? 1 : -1);
  // }

  toggleReminder(task: Task) {
    task.reminder =!task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

//   onClearCompletedTasks(): void {
//     this.tasks = this.tasks.filter(t => !t.reminder);
//   }

//   onSearch(searchTerm: string): void {
//     this.tasks = this.tasks.filter(t => t.text.toLowerCase().includes(searchTerm.toLowerCase()));
//   }

//   onToggleAllReminders(): void {
//     this.tasks.forEach(t =>
// }
}
