import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule,  Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { Http } from '@angular/http/src/http';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SignUpComponent } from './authenticate/sign-up/sign-up.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SignInComponent } from './authenticate/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { TopbarLogoComponent } from './main/topbar-logo/topbar-logo.component';

import { SettingsService } from './Services/settings.service';
import { UserService } from './Services/user.service';
import { TaskService } from './Services/task.service';


import { AuthGuard } from './Guards/authguard.guard';
import { TasksComponent } from './main/tasks/tasks.component';
import { TaskComponent } from './main/tasks/task/task.component';
import { AddTaskComponent } from './main/tasks/add-task/add-task.component';
import { AuthGuard2 } from './Guards/authguard2.guard';




  const appRoutes: Routes = [
    {path: '', component: MainComponent, canActivate:[AuthGuard]},
    {path: 'authenticate', component: AuthenticateComponent, canActivate:[AuthGuard2]},
    {path: '**', component: AuthenticateComponent, canActivate:[AuthGuard2]},
  ]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AuthenticateComponent,
    SignInComponent,
    MainComponent,
    TopbarLogoComponent,
    SidebarComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
              SettingsService, UserService, TaskService,
              AuthGuard, AuthGuard2],
  bootstrap: [AppComponent]
})
export class AppModule { }
