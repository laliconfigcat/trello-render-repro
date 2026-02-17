import { Routes } from '@angular/router';
import { Bootstrap } from './bootstrap/bootstrap';
import { Modal } from './modal/modal';
import { Content } from './content/content';

export const routes: Routes = [
  { path: '', component: Bootstrap },
  { path: 'modal', component: Modal },
  { path: 'content', component: Content },
];
