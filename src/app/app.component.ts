import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { Task } from "./models/task.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment4';


  user!: string;
  TodoTaskList!: Task[];
  DoingTaskList!: Task[];
  DoneTaskList!: Task[];
  CancelledTaskList!: Task[];

  date!: Date;
  ngOnInit(): void {
    this.user = "Valentin Gandon";// this information needs to be provided by server

    this.TodoTaskList = [
/*      {title: "Manger", description:"Miam"},
      {title: "Bosser", description:"5 minutes de révision une heure de pause"},
      {title: "Dormir", description:"Une journée bien remplie"},
*/
    ];
    this.DoingTaskList = [
/*      {title: "Faire ci", description:"Miam"},
      {title: "Faire ca", description:"5 minutes de révision une heure de pause"},
      {title: "Trouver des taches", description:"Pour s'occuper"},
      */
    ];
    this.DoneTaskList = [
/*      {title: "Respirer", description:"Pour la santé"},
      {title: "Rigoler", description:"Pour ne pas perdre sa journée"},
      {title: "Chill", description:"pour le moral"},*/
    ];
    this.CancelledTaskList = [
//      {title: "Rien", description:"On annule rien ici"},
    ];
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
    //back need to be updated
  }
  updateTask(taskToSuppr: Task, tab: Task[]): void {
    // back need to be updated
  }
  deleteTask(taskToSuppr: Task, tab: Task[]): void {
    const index = tab.indexOf(taskToSuppr);
    if (index != -1) {
      tab.splice(index, 1);
    }
    // back need to be updated
  }
}
