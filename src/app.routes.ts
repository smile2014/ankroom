import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { Login } from './login';
import { Signup } from './member/signup';
import { NormalSignup } from './member/normalSignup';
import { NormalSignupChange } from './member/normalSignupchange';
import { BusinessSignup } from './member/businessSignup';
import { BusinessSignupChange } from './member/businessSignup/businessSignup';
import { AuthGuard } from './common/auth.guard';
import {MainPage} from './common/mainPage/mainPage';
import {BuildCaseInput} from './buildCase/buildCaseInput';

export const routes: RouterConfig = [
  { path: '',       component:  Login },
  { path: 'login',  component: Login },
  { path: 'signup', component: Signup },
  { path: 'normalsignup', component: NormalSignup },
  { path: 'normalsignupchange', component: NormalSignupChange },
  { path: 'businesssignup', component: BusinessSignup },
  { path: 'businesssignupchange', component: BusinessSignupChange },
  { path: 'buildcaseinput', component: BuildCaseInput },
  { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: 'mainPage',   component: MainPage },
  { path: '**',     component: Login },

];
