import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'base-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  podcasts$: Observable<any | undefined> = this.apiService.findAllPodcasts();

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
