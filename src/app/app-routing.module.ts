import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Base: Home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'podcasts',
    title: 'Base: Podcasts',
    loadChildren: () => import('./podcasts/podcasts.module').then(m => m.PodcastsModule)
  },
  {
    path: 'episodes',
    title: 'Base: Episodes',
    loadChildren: () => import('./episodes/episodes.module').then(m => m.EpisodesModule)
  },
  {
    path: 'users',
    title: 'Base: Users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
