import { Component, OnInit, HostListener } from '@angular/core';
import { UserService } from '../Services/user.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  
  
  constructor(private user: UserService) { 
    if(window.innerWidth<=991)
      this.resize = true;
    else
      this.resize = false;
  }

  resize:boolean;

  @HostListener('window:resize', ['$event'])
  
  onResize(event) {
    if(event.target.innerWidth<=991)
      {this.resize = true;
      console.log(window);}
    else
      this.resize = false;
  }
  
  
      
  ngOnInit() {
  }
  
  onActivate(){
  }

}
