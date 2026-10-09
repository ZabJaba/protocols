import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  // TODO(LR1-02): подключите Tickets к /tickets и About к /about.
  { path: '**', component: NotFound },
];
