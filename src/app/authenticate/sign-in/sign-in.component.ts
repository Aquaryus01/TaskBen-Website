import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '../../Services/settings.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  rForm: FormGroup;
  constructor(private fb: FormBuilder,
              private http: Http,
              private settings: SettingsService,
              private user: UserService,
              private router: Router) {
    this.rForm = fb.group({
      'email'  : [null, Validators.email],
      'password'  : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    })
  }
  no_auth: boolean = false;

  ngOnInit() {
  }

  login(Post) {
    var parameter = JSON.stringify(Post);
    this.rForm.reset();
    this.user.login(parameter).subscribe(
        res => {
          console.log(res.json());
          if(res.json().Value==true)
          {
              this.settings.setToken(res.json().Token);
              this.router.navigate(['/']);
          }
          else if(res.json().Value==false)
          {
              console.log('da');
              this.no_auth = true;
          }
          
        },
        err => {
          console.log(err);
        }
    );
  }
}
