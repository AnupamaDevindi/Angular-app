import { Component, OnInit } from '@angular/core';
import { UiServiceService } from '../../services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showAddTask!: boolean;
  subscription!: Subscription;
 title: string = 'Task Tracker';

  constructor(private uiService: UiServiceService) { }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
   
  ngOnInit(): void{
  }
}
