import { Component } from '@angular/core';
import { ApiService } from '../services';
import { Podcast } from './model';
import { Observable } from 'rxjs';

@Component({
  selector: 'base-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent {
  podcasts$: Observable<any | undefined> = this.apiService.getAll<Podcast[]>('podcasts');

  constructor(private apiService: ApiService) {}
}
