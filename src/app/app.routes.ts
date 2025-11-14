import { Routes } from '@angular/router';
import { MainLayout } from './shared/components/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            // {
            //     path: 'home',
            //     loadComponent: () => import('./pages/home/home').then((m) => m.Home),
            // },

            { path: '', redirectTo: 'home', pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: '' },
];
