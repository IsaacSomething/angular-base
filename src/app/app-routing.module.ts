import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routeProps: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
    data: { icon: 'home' }
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
