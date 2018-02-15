import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import {Task} from '../tasks/sharable/task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) 
  { 
      this.taskService.curentMessage.subscribe((task)=>{
      
        this.taskService.createTask(task).subscribe((res)=>{
          console.log(res);
          task['id'] = parseInt(res);
          console.log(task);
          this.tasks.push(task);
        })
      });

      this.taskService.currentTask.subscribe(id=>{
        for(let task of this.tasks){
          if(task.id==id)
          {
            var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
          }
        }
      })

      this.taskService.getTasks().subscribe((res)=>{
        this.tasks = res;
      });
  }

  ngOnInit() {
  }

}
