import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http/';
import { SettingsService } from './settings.service';

@Injectable()
export class UserService {
  

  constructor(private http:Http,
              private settings:SettingsService) { }

  register(parameter) {
    return this.http.post(this.settings.getUrl() + '/register', parameter, this.settings.optionType())
  }

  login(parameter){
    return this.http.post(this.settings.getUrl() + '/login', parameter, this.settings.optionType())
  }
}
