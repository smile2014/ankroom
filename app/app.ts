import { provideRouter, RouterConfig } from '@angular/router';

import { SignupCmp } from './pages/member/signup/signup';
import { normalSignupCmp } from './pages/member/signup/normalSignup/normalSignup';
import { businessSignupCmp } from './pages/member/signup/businessSignup/businessSignup';


export const routes : RouterConfig  = [
    {
        path: '/normalSignup',
        component: normalSignupCmp
    },
    {
        path: '/normalSignup',
        component: businessSignupCmp
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
