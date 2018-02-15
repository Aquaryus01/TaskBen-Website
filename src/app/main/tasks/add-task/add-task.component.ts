import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../Services/task.service';
import {Task} from '../sharable/task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task;
  constructor(private taskService: TaskService) { 
    this.task = {
      id: 0,
      title: "",
      description: ""

    }
  }
  isCollapsed = true;

  ngOnInit() {
  }

  addTask(){
    console.log(this.task);
    this.taskService.addTask(this.task);
    this.isCollapsed = !this.isCollapsed;
    this.task = new Task;
    //this.task.description = "";
    //this.task.title = "";
    //this.Task.taskDescription.emit("alex e cel mai tare");
  }

  test(){
    this.task.description = "";
    this.task.title = "";
  }


}
