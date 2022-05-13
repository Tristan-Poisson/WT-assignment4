import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Task } from "./models/task.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment4';

  TodoTaskList!: Task[];
  DoingTaskList!: Task[];
  DoneTaskList!: Task[];
  CancelledTaskList!: Task[];

  date!: Date;
  Task1!: Task;
  Task2!: Task;
  Task3!: Task;
  Task4!: Task;
  Task5!: Task;
  Task6!: Task;
  Task7!: Task;
  Task8!: Task;
  Task9!: Task;

  ngOnInit(): void {
    this.TodoTaskList = [
      {title: "Manger", description:"Miam"},
      {title: "Bosser", description:"5 minutes de révision une heure de pause"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
      {title: "Dormir", description:"Une journée bien remplie zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz bonjour"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
      {title: "Dormir", description:"Une journée bien remplie"},
    ];
    this.DoingTaskList = [
      {title: "Faire ci", description:"Miam"},
      {title: "Faire ca", description:"5 minutes de révision une heure de pause"},
      {title: "Trouver des taches", description:"Pour s'occuper"},
    ];
    this.DoneTaskList = [
      {title: "Respirer", description:"Pour la santé"},
      {title: "Rigoler", description:"Pour ne pas perdre sa journée"},
      {title: "Chill", description:"pour le moral"},
    ];
    this.CancelledTaskList = [
      {title: "Rien", description:"On annule rien ici"},
    ];
    this.date = new Date();
    this.Task1 = new Task("Manger", "Miam");
    this.Task2 = new Task("Bosser", "5 minutes de révision une heure de pause");
    this.Task3 = new Task("Dormir", "Une journée bien remplis");
    this.Task4 = new Task("Faire ci", "Car c'est important");
    this.Task5 = new Task("Faire ca", "Parce que");
    this.Task6 = new Task("Trouver des taches", "Puis les finir enfin essayer au moins (je crois)");
    this.Task7 = new Task("Respirer", "C'est important");
    this.Task8 = new Task("Rigoler", "La journée est perdue sinon");
    this.Task9 = new Task("Chill", "Asmr");
  }
  addTask(taskList: Task[]): void {
    console.log("salam");
    taskList.push({title: "Test to the jungle", description:"coucous"});
  }
}
