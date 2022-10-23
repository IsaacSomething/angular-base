import { Component } from '@angular/core';
import { ApiService } from '../services';
import { Episode } from './model';

@Component({
  selector: 'base-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {
  episodes$ = this.apiService.getAll<Episode[]>('episodes');

  constructor(private apiService: ApiService) {}
}
