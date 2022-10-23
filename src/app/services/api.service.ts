import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  findAllPodcasts(): Observable<any[]> {
    return this.http.get('/api/podcasts').pipe(map((res: any) => res['payload']));
  }

  findAllEpisodes(): Observable<any[]> {
    return this.http.get('/api/episodes').pipe(map((res: any) => res['payload']));
  }
}
