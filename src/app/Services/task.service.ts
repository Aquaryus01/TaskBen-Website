import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import {Task} from '../main/tasks/sharable/task'
import { Http } from '@angular/http/';
import { SettingsService } from './settings.service';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
  messageSource = new Subject<Task>();
  removeTaskSubjet = new Subject<number>();

  curentMessage = this.messageSource.asObservable();
  currentTask = this.removeTaskSubjet.asObservable();
  
  constructor(private http: Http,
              private settingsService: SettingsService) { }

  addTask(message: Task){
    this.messageSource.next(message);
  }

  deleteTask(id: number){
    this.removeTaskSubjet.next(id);
  }

  createTask(parameter){
    return this.http.post(this.settingsService.getUrl()+"/addTask", parameter, this.settingsService.optionTypeJWT()).map(response => response.text());
  }

  getTasks(){
    return this.http.get(this.settingsService.getUrl()+"/getTasks", this.settingsService.optionTypeJWT()).map(response => response.json());
  }

  updateTask(parameter){
    return this.http.post(this.settingsService.getUrl()+"/updateTask", parameter, this.settingsService.optionTypeJWT()).map(response => response.json());
  }

  removeTask(id){
    return this.http.post(this.settingsService.getUrl()+"/removeTask", id, this.settingsService.optionTypeJWT()).map(response => response.json());
  }
}
