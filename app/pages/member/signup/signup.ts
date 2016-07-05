import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
@Component({
    selector : 'signup',
    templateUrl : './pages/member/signup/signup.html'
})

export class SignupCmp {
    constructor( private _router: Router) {}
    gotonormalSignup() {
        this._router.navigate(['normalSignup']);
    }
    gotobusinessSignup() {
        this._router.navigate(['businessSignup']);
    }
}
