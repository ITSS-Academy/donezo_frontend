import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {MatButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [
    CdkDropList,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButton,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent {

  lists = [
    {
      title: "Ideas",
      tasks: ideas,
    },
    {
      title: "In Progress",
      tasks: inProgress,
    },
    {
      title: "Done",
      tasks: done,
    }
  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}



let ideas = [
  {
    title: "Task 1",
    time: "12 Nov 2022",
  },
  {
    title: "Task 2",
    time: "12 Nov 2022",
  },
  {
    title: "Task 3",
    time: "12 Nov 2022",
  },
  {
    title: "Task 4",
    time: "12 Nov 2022",
  },
];
let inProgress = [
  {
    title: "Task 5",
    time: "12 Nov 2022",
  },
  {
    title: "Task 6",
    time: "12 Nov 2022",
  },
  {
    title: "Task 7",
    time: "12 Nov 2022",
  },
  {
    title: "Task 8",
    time: "12 Nov 2022",
  },
  {
    title: "Task 9",
    time: "12 Nov 2022",
  },
  {
    title: "Task 10",
    time: "12 Nov 2022",
  },
];

let done = [
  {
    title: "Task 11",
    time: "12 Nov 2022",
  },
  {
    title: "Task 12",
    time: "12 Nov 2022",
  },
  {
    title: "Task 13",
    time: "12 Nov 2022",
  },
  {
    title: "Task 14",
    time: "12 Nov 2022",
  },
];

