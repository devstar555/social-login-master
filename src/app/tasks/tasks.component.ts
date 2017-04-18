import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from './task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any = [];
  title: string;

  constructor(private tasksService: TasksService ) {
    
  }

  ngOnInit() {
    this.tasksService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }

  addTask(event) {
    event.preventDefault();
    const newTask = {
      title: this.title,
      isDone: false
    }

    this.tasksService.addTask(newTask).subscribe(task => {
      this.tasks.push(newTask);
      console.log(newTask.title);
      this.title = '';
    });
  }

  deleteTask(id) {
    const tasks = this.tasks;

    this.tasksService.deleteTask(id).subscribe(data => {
      if(data.n == 1) {
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i]._id == id) {
            tasks.splice(i, 1);
          }
        }
      }
    });
  }

  updateStatus(task) {
    const _task = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };

    this.tasksService.updateStatus(_task).subscribe(data => {
      task.isDone = !task.isDone;
    });
  }

}
