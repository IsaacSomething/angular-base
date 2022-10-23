import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { apiType } from './api.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Get all values for 'podcasts' | 'users' | 'episodes';
   * @param type : apiType
   * @returns Observable<T>
   */
  getAll<T>(type: apiType): Observable<T> {
    return this.http.get(`/api/${type}`).pipe(map((res: any) => res['payload']));
  }
}
