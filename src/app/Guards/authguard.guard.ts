import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from '../Services/settings.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private settings: SettingsService, private router: Router)
  {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean 
    {
      if(this.settings.getToken())
        return true;

      this.router.navigate(['/authenticate']);
      return false;
  }
}