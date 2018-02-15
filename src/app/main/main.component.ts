import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onActivate(){
  }

}
