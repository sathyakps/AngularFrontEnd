import { MatSnackBar } from '@angular/material';
import { UserService } from '../../@core/services/user.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    registerForm: FormGroup;
    @ViewChild('loginButton') loginBtn: ElementRef;
    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private matSnackBar: MatSnackBar,
        private renderer: Renderer
    ) {}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        });

        this.registerForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            mobile: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
            password: new FormControl(null, Validators.required),
            referee: new FormControl(null)
        });

        this.route.params.subscribe(params => {
            if (params['code']) {
                this.registerForm.get('referee').setValue(params['code']);
            }
        });
    }

    login() {
        this.userService.login(this.loginForm.value);
    }

    signUp() {
        this.userService.signUp(this.registerForm.value).subscribe(data => {
            if (data['success']) {
                this.matSnackBar.open('Registration Successfull. Login to Continue', 'OK', {
                    duration: 5000
                });
                this.registerForm.reset();
            } else {
                this.matSnackBar.open(data['message'], 'Try Again', {
                    duration: 5000
                });
            }
        });
    }
}
