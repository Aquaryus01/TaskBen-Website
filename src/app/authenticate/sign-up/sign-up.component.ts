import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { SettingsService } from '../../Services/settings.service';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  rForm: FormGroup;
  no_auth: boolean = false;
  constructor(private fb: FormBuilder,
              private http: Http,
              private settings: SettingsService,
              private user: UserService,
              private router: Router
            ) {
    this.rForm = fb.group({
      'email'  : [null, Validators.email],
      'password'  : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'firstName'  : [null, Validators.required],
      'lastName'  : [null, Validators.required],
    })
  }

  errorMessage:string = "";
  
  ngOnInit() {
  }

  register(Post) {
    
    console.log(JSON.stringify(Post))
    this.user.register(JSON.stringify(Post)).subscribe(
      res => {
        if(res.json().Value==true)
        {
          this.settings.setToken(res.json().Token);
          this.router.navigate(['/']);
        }
        else
        {
          this.rForm.reset();
          this.errorMessage = res.json().Message;
          this.no_auth = true;
        }
        console.log(res.text());
      },
      err => {
        console.log(err);
      }
  );}
    /*var parameter = JSON.stringify(Post);
    console.log(parameter);
    const req = this.http.post(this.settings.getUrl() + '/register', parameter)
      .subscribe(
        res => {
          console.log(res.text());
          if(res.json()=='1'){
            console.log("yey");
          }
          else
            console.log("something went wrong!");
          
        },
        err => {
          console.log(err);
        }
    );}}*/
  
}