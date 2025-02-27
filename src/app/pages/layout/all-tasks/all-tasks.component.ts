import {Component} from '@angular/core';

import {MaterialModule} from '../../../shared/modules/material.module';

export interface Task {
  tag: number;
  name: string;
  list: string;
  description: string;
  time: string;
}


@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
  displayedColumns: string[] = ['Tag', 'List', 'Description', 'Name', 'Time'];
  dataSource = ELEMENT_DATA;
  protected readonly MaterialModule = MaterialModule;
}


const ELEMENT_DATA: Task[] = [
  {tag: 1, list: 'Work', description: "not done", name: 'H', time: "two weeks"},
  {tag: 2, list: 'Task', description: "done", name: 'D', time: "One day"},
  {tag: 3, list: 'Sidebar', description: "done", name: 'H', time: "two weeks"},
  {tag: 4, list: 'Navbar', description: "done", name: 'T', time: "one month"},
  {tag: 5, list: 'All task', description: "done", name: 'A', time: "one month"},
  {tag: 6, list: 'Kanban', description: "not done", name: 'F', time: "one week"},
  {tag: 7, list: 'All board', description: "not done", name: 'J', time: "one week"},
  {tag: 8, list: 'sign in', description: "not done", name: 'K', time: "three days"},
  {tag: 8, list: 'sign out', description: "not done", name: 'L', time: "two days"},
  {tag: 8, list: 'services', description: "not done", name: 'S', time: "one day"},
  {tag: 8, list: 'shared', description: "not done", name: 'X', time: "five days"},
  {tag: 8, list: 'styles', description: "done", name: 'Z', time: "one month"},

];



