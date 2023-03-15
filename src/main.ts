import './polyfills';

import {Component, importProvidersFrom, isDevMode} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter, RouterLink, RouterLinkActive, RouterOutlet, Routes,} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HeaderComponent} from './components/header/header.component';

@Component({
    selector: 'app',
    template: `
        <div class="overflow-x-hidden bg-gray-50">
            <app-header></app-header>
            <router-outlet></router-outlet>
        </div>
    `,
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
})
export class AppComponent {
}

const routes: Routes = [
    {path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomepageComponent)},
    {path: 'offer', loadComponent: () => import('./pages/offer/offer.component').then(c => c.OfferComponent)},
    {path: 'how-we-work', loadComponent: () => import('./pages/approach/approach.component').then(c => c.ApproachComponent)},
    {path: 'join-us', loadComponent: () => import('./pages/joinus/joinus.component').then(c => c.JoinUsComponent)},
];


bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideRouter(routes),
        // importProvidersFrom(ServiceWorkerModule.register('ngsw-worker.js', {
        //     enabled: !isDevMode(),
        //     registrationStrategy: 'registerWhenStable:30000'
        // })),
    ],
}).catch(err => console.error(err));
