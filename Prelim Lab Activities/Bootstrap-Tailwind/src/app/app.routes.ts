import { Tailwind } from './tailwind/tailwind';
import { Bootstrap } from './bootstrap/bootstrap';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Directives } from './directives/directives';
import { DataBinding } from './data-binding/data-binding';
import { Pagenotfound } from './pagenotfound/pagenotfound';


export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'directives', component: Directives},
  { path: 'data-binding', component: DataBinding},
  { path: '', component: Pagenotfound},
  { path: 'bootstrap', component: Bootstrap},
  { path: 'tailwind', component: Tailwind}
];
