import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AllTasksComponent} from './pages/all-tasks/all-tasks.component';
import {AllBoardsComponent} from './pages/all-boards/all-boards.component';
import {KanbanComponent} from './pages/kanban/kanban.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'allTasks',
    component: AllTasksComponent,
  },
  {
    path: 'allBoards',
    component: AllBoardsComponent
  },
  {
    path: 'kanban',
    component: KanbanComponent
  }
];
