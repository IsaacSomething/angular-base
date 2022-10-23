import { Component } from '@angular/core';
import { ApiService } from '../services';
import { User } from './model';

@Component({
  selector: 'base-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$ = this.apiService.getAll<User[]>('users');

  constructor(private apiService: ApiService) {}
}
