import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'base-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes$: Observable<any | undefined> = this.apiService.findAllEpisodes();

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
