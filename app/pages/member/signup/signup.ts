import {Component} from 'angular/core';
import {Router} from 'angular/router';

@Component({
    selector : 'signup',
    templateUrl : './pages/member/signup/signup.html'
})

export class SignupCmp {
    constructor( private router: Router) {}
    gotonormalSignup() {
        this.router.navigate(['normalSignup']);
    }
    gotobusinessSignup() {
        this.router.navigate(['businessSignup']);
    }
}
