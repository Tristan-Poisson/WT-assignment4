import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Output() deleteEvent = new EventEmitter<Task>();
  @Output() updateEvent = new EventEmitter<Task>();
  @Input() Task!: Task;
  revealInfo!: boolean;
  priorityColor!: String;

  constructor() {
    this.revealInfo = false;
  }

  ngOnInit(): void {
    switch (this.Task.priority) {
      case "Normal":
        this.priorityColor = "white";
        break;
      case "High":
        this.priorityColor="#FBB";
        break;
      case "Low":
        this.priorityColor="#BFB";
        break;
      default:
        ;
    }
  }
  changePriority(): void {
    switch(this.Task.priority) {
      case "Normal":{
        this.Task.priority="High";
        this.priorityColor="#FBB";
        break;
      }
      case "High":{
        this.Task.priority="Low";
        this.priorityColor="#BFB";
        break;
      }
      case "Low":{
        this.Task.priority="Normal";
        this.priorityColor="white";
        break;
      }
    }
    this.updateTask();
  }
  deleteTask(): void {
    this.deleteEvent.next(this.Task);
  }
  updateTask(): void {
    this.updateEvent.next(this.Task);
  }

  editTitle(title: string): void {
    this.Task.title = title;
    this.updateTask();
  }
  editDesc(desc: string): void {
    this.Task.description = desc;
    this.updateTask();
  }
  editUser(user: string): void {
    this.Task.user = user;
    this.updateTask();
  }
}
