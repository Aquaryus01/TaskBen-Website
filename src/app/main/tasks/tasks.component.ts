import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../Services/task.service';
import {Task} from '../tasks/sharable/task';
import { trigger,style,transition,animate,keyframes,query,stagger, state } from '@angular/animations';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
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
