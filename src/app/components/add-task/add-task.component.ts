import { Component, EventEmitter, OnInit , Output} from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!:string;
  day!:string;
  reminder:boolean =false;
  showAddTask!: boolean;
onSubmit() {
 if(!this.text){
  alert("Please add a task");
  return;
 }

 const task = {
  text: this.text,
  day: this.day,
  reminder: this.reminder
 }

 this.onAddTask.emit(task);
 this.text = '';
 this.day = '';
 this.reminder = false;
}
constructor(){

}

ngOnInit(): void {
  
}
}
