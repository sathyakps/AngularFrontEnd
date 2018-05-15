import { DataService } from '../../@core/services/data.service';
import { BASR_URL } from './../../app.config';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class UserService {
    constructor(
        private dataService: DataService,
        private http: HttpClient,
        private router: Router,
        private matbar: MatSnackBar
    ) {}

    checkLoginStatus() {
        const token = localStorage.getItem('loggedInUser');
        const status = localStorage.getItem('loggedInStatus');
        if (token && status) {
            this.dataService.loggedInUser.next(JSON.parse(token));
            this.dataService.loggedInStatus.next(true);
            return true;
        } else {
            return false;
        }
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/auth']);
        this.dataService.loggedInUser.next(null);
        this.dataService.loggedInStatus.next(false);
        this.matbar.open('You have been Logged Out !', 'OK', {
            duration: 5000
        });
    }

    setCurrentUser(data) {
        localStorage.setItem('loggedInUser', JSON.stringify(data));
        localStorage.setItem('loggedInStatus', 'true');
        this.dataService.loggedInUser.next(data);
        this.dataService.loggedInStatus.next(true);
    }

    login(value) {
        this.http.post(BASR_URL + 'user/login', value).subscribe(data => {
            if (data['success']) {
                this.setCurrentUser(data['data']);
                if (data['data']['role'] === 'USER') {
                    this.router.navigate(['/marketing']);
                    this.matbar.open('You have been Logged in !', 'OK', {
                        duration: 5000
                    });
                } else if (data['data']['role'] === 'ADMIN') {
                    this.router.navigate(['/admin']);
                    this.matbar.open('You have been Logged in !', 'OK', {
                        duration: 5000
                    });
                }
            } else {
                this.matbar.open(data['message'], 'Try Again', {
                    duration: 5000
                });
            }
        });
    }

    signUp(value) {
        return this.http.post(BASR_URL + 'user/signup', value);
    }

    getProfile(email) {
        return this.http.get(BASR_URL + 'user/profile/' + email);
    }

    generateProductCoupon(detail, email) {
        return this.http.post(BASR_URL + 'referral/code/' + email, detail);
    }

    getUserData(email) {
        return this.http.get(BASR_URL + 'data/user/' + email);
    }
}
