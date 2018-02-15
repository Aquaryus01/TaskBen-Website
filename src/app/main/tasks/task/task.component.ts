import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../tasks/sharable/task'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TaskService } from '../../../Services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  activateEdit: boolean = false;
  taskForm: FormGroup;
  titleDirty: string;
  descriptionDirty: string;

  constructor(private fb: FormBuilder,
              private taskService: TaskService) {
    this.taskForm = fb.group({
      'title'  : [null, Validators.required],
      'description'  : [null, Validators.required]
    }) 
  }
  

  
   
  updateTask(){
    this.task.description = this.descriptionDirty;
    this.task.title = this.titleDirty;
    this.activateEdit = !this.activateEdit;
    this.taskService.updateTask(this.task).subscribe(res =>{
    })
  }

  removeTask(){
    this.taskService.removeTask({id:this.task.id}).subscribe(res =>{
      console.log(res);
      this.taskService.deleteTask(this.task.id);
    })
    
  }

  editChanges(){
    // console.log(this.titleDirty +" "+ this.task.title +" "+this.descriptionDirty +" "+ this.task.description)
    if(this.titleDirty == this.task.title && this.descriptionDirty == this.task.description)
    {
      console.log('sad');
      return true;
    }
    else if(this.titleDirty=="")
      return true;
    return false;
  }

  

  ngOnInit() {
    this.titleDirty = this.task.title; 
    this.descriptionDirty = this.task.description;
    console.log(this.titleDirty); 
  }

}
