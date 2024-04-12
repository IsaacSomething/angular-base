import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BaseLogoModule } from '@base/components/logo';

@Component({
  selector: 'base-toolbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, BaseLogoModule],
  template: `
    <mat-toolbar>
      @if(small){
      <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>{{ sidenav.opened ? 'menu_open' : 'menu' }}</mat-icon>
      </button>
      <base-logo />
      }

      <span class="flex-auto"></span>
      <button mat-icon-button [matMenuTriggerFor]="menu"><mat-icon>show_chart</mat-icon></button>
      <button mat-icon-button [matMenuTriggerFor]="menu"><mat-icon>line_weight</mat-icon></button>
      <button class="!shadow-none font-black" mat-mini-fab color="secondary">AB</button>
    </mat-toolbar>

    <mat-menu #menu="matMenu">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu>
  `
})
export class ToolbarComponent {
  @Input() sidenav!: MatSidenav;
  @Input() small!: boolean | null;
}
