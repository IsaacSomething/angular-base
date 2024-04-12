import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { routeProps } from '../../../app-routing.module';
import { BaseLogoModule } from '../logo';

@Component({
  selector: 'base-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, RouterModule, MatIconModule, MatToolbarModule, MatListModule, BaseLogoModule],
  template: `
    <mat-toolbar class="!bg-transparent">
      <base-logo />
    </mat-toolbar>

    <mat-nav-list>
      <mat-list-item *ngFor="let route of routes" [routerLink]="route.path">
        <mat-icon matListItemIcon *ngIf="route?.data as data">{{ data['icon'] }}</mat-icon>
        <div matListItemTitle>{{ route.title }}</div>
      </mat-list-item>

      <mat-list-item *ngFor="let item of [1, 1, 1, 1, 1, 1]; let idx = index" routerLink="/">
        <mat-icon matListItemIcon>folder</mat-icon>
        <div matListItemTitle>{{ idx }}: Item</div>
      </mat-list-item>
    </mat-nav-list>
  `
})
export class MenuComponent {
  routes = routeProps;
}
