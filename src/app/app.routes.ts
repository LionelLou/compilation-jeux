import { Routes } from '@angular/router';
import { SuperSimonComponent } from './super-simon/super-simon.component';
import { SpaceInvadersComponent } from './space-invaders/space-invaders.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: "super-simon",
        component: SuperSimonComponent,
    },
    {
        path: "space-invaders",
        component: SpaceInvadersComponent
    },
    {
        path: "welcome",
        component: WelcomeComponent,
    },
    {
        path:'',
        redirectTo: '/welcome',
        pathMatch: "full"
    },
    {
        path: "**",
        component: NotFoundComponent
    }

];
