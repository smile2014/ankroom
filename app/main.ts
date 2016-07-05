import { APP_BASE_HREF } from '@angular/common';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';

import { AppCmp } from './app';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
]);
