import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllTasksComponent} from './all-tasks/all-tasks.component';
import {AllBoardsComponent} from './all-boards/all-boards.component';
import {LayoutComponent} from './layout.component';

export const LayoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'kanban',
        loadChildren: () => import('./kanban/kanban.routes').then(m => m.KanbanRoutes)
      },
      {
        path: 'allTasks',
        component: AllTasksComponent
      },
      {
        path: 'allBoards',
        component: AllBoardsComponent
      }
    ],
  }
]
