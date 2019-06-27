import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
  { path: '', component: Homepage, pathMatch: 'full', data: {} },
  {
    path: 'projects',
    component: Projects
    //children: [
    //  { path: '', component: ComponentCategoryList },
    //  { path: ':id', component: ComponentList },
    //],
  },
  //{ path: 'category/:id', redirectTo: '/categories/:id', pathMatch: 'full' },
  //{
  //  path: ':id',
  //  component: ComponentViewer,
  //  children: [
  //    { path: '', redirectTo: 'overview', pathMatch: 'full' },
  //    { path: 'overview', component: ComponentOverview, pathMatch: 'full' },
  //    { path: 'api', component: ComponentApi, pathMatch: 'full' },
  //    { path: 'examples', component: ComponentExamples, pathMatch: 'full' },
  //    { path: '**', redirectTo: 'overview' },
  //  ],
  //}
];
