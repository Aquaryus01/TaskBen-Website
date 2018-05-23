import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http/';

@Injectable()
export class SettingsService {

  private url = "http://localhost:5000";
  private localStorage = window.localStorage;

  constructor() { }

  optionType()
  {
      let head = new Headers({ 'Content-Type': 'application/json' });
      return { headers: head};
  }

  optionTypeJWT()
  {
      let head = new Headers({ 'Content-Type': 'application/json', 
                               'key': this.getToken()});
      return { headers: head};
  }
  
  getUrl()
  {
    return this.url;
  }
  public getToken()
  {
    //return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzEsImVtYWlsIjoiYWxleGJlbmNoZWE5OUB5YWhvby5jb20iLCJmaXJzdE5hbWUiOiJBbGV4IiwibGFzdE5hbWUiOiJCZW5jaGVhIiwiaWF0IjoxNTE4ODIxMjU0LCJleHAiOjE1MTg4MzkyNTR9.LjU9C05XOKUekNCBlc9zzi8JeOJO-stKoPa3RgsdOBg";
    return this.localStorage.getItem('key');
  }

  public setToken(str: string)
  {
    console.log(str + "yeye");
    this.localStorage.setItem('key', str);
  }

}
