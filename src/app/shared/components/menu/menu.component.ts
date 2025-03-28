import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { routeProps } from '../../../app-routing.module';
import { BaseLogoModule } from '../logo';

@Component({
    selector: 'base-menu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule, MatIconModule, MatToolbarModule, MatListModule, BaseLogoModule],
    template: `
    <mat-toolbar class="!bg-transparent">
      <base-logo />
    </mat-toolbar>

    <mat-nav-list>
      @for(route of routes;track idx;let idx = $index){
      <mat-list-item [routerLink]="route.path" class="pointer">
        @if(route?.data; as data){
        <mat-icon matListItemIcon>{{ data['icon'] }}</mat-icon>
        }
        <div matListItemTitle>{{ route.title }}</div>
      </mat-list-item>
      }
    </mat-nav-list>
  `
})
export class MenuComponent {
  routes = routeProps;
}
