import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Partners } from './partners/partners';
import { About } from './about/about';
import { JoinUs } from './join-us/join-us';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'partners', component: Partners },
  { path: 'about', component: About },
  { path: 'join-us', component: JoinUs }
];
