import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private snackBar: MatSnackBar, private userService: UserService) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.userService.checkLoginStatus()) {
            return true;
        } else {
            this.router.navigateByUrl('/auth/login');
            this.snackBar.open('Please Login to Continue', 'ok', {
                duration: 5000
            });
            return true;
        }
    }
}
