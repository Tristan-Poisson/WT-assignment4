import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() Task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
