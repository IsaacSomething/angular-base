import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routeProps: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    data: { icon: 'home' }
  },
  {
    path: 'item-0',
    title: 'Item 0',
    loadComponent: () => import('./pages/item-0/item-0.component').then(c => c.Item0Component),
    data: { icon: 'folder' }
  },
  {
    path: 'item-1',
    title: 'Item 1',
    loadComponent: () => import('./pages/item-1/item-1.component').then(c => c.Item1Component),
    data: { icon: 'looks_one' }
  },
  {
    path: 'item-2',
    title: 'Item 2',
    loadComponent: () => import('./pages/item-2/item-2.component').then(c => c.Item2Component),
    data: { icon: 'looks_two' }
  },
  {
    path: 'item-3',
    title: 'Item 3',
    loadComponent: () => import('./pages/item-3/item-3.component').then(c => c.Item3Component),
    data: { icon: 'looks_3' }
  },
  {
    path: 'item-4',
    title: 'Item 4',
    loadComponent: () => import('./pages/item-4/item-4.component').then(c => c.Item4Component),
    data: { icon: 'looks_4' }
  },
  {
    path: 'item-5',
    title: 'Item 5',
    loadComponent: () => import('./pages/item-5/item-5.component').then(c => c.Item5Component),
    data: { icon: 'looks_5' }
  }
];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...routeProps,
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
