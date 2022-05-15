import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { Task } from "../models/task.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Assignment4';


  user!: string;
  TodoTaskList!: Task[];
  DoingTaskList!: Task[];
  DoneTaskList!: Task[];
  CancelledTaskList!: Task[];

  date!: Date;
  ngOnInit(): void {
    this.user = "Valentin Gandon";

    this.TodoTaskList = [];
    this.DoingTaskList = [];
    this.DoneTaskList = [];
    this.CancelledTaskList = [];
    this.date = new Date();
  }
  drop(event: CdkDragDrop<Task[]>) {
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
  addTask(taskList: Task[]): void {
    taskList.push({title: "Title", description:"Task description", user:this.user, priority:"Normal"});
  }
  updateTask(taskToSuppr: Task, tab: Task[]): void {
  }
  deleteTask(taskToSuppr: Task, tab: Task[]): void {
    const index = tab.indexOf(taskToSuppr);
    if (index != -1) {
      tab.splice(index, 1);
    }
  }
}
