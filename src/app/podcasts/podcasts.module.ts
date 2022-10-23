import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastsRoutingModule } from './podcasts-routing.module';
const moduleImports = [PodcastsRoutingModule];

import { PodcastsComponent } from './podcasts.component';

@NgModule({
  declarations: [PodcastsComponent],
  imports: [CommonModule, ...moduleImports]
})
export class PodcastsModule {}
