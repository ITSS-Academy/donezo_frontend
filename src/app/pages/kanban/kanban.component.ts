import { Component } from '@angular/core';
import {ListTasksComponent} from './components/list-tasks/list-tasks.component';
import {TaskDescriptionComponent} from './components/task-description/task-description.component';
import {AllTasksComponent} from '../all-tasks/all-tasks.component';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [
    ListTasksComponent,
    TaskDescriptionComponent,
    AllTasksComponent
  ],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent {

}
