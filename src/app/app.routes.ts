import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'program/:id', component: ProgramDetailComponent },
  { path: '**', redirectTo: '' }
];
