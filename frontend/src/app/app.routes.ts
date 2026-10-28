import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Tickets } from './pages/tickets/tickets';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  // TODO(LR1-02): подключите Tickets к /tickets и About к /about.
  { path: 'tickets', component: Tickets },
  { path: 'about', component: About },
  { path: '**', component: NotFound },
];
