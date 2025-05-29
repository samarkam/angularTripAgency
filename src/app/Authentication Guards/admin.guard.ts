import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Roles, User } from '../Interfaces/IUser';
import { AuthenticationService } from '../Services/authentication.service';
import { DatabaseConnectionService } from '../Services/database-connection.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router, private db: DatabaseConnectionService, private authFire: AngularFireAuth) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.isAdmin();
  }
  
}
