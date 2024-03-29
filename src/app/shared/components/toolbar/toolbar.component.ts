import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'base-toolbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, MatIconModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar>
      <button mat-icon-button *ngIf="small" (click)="sidenav.toggle()">
        <mat-icon>{{ sidenav.opened ? 'menu_open' : 'menu' }}</mat-icon>
      </button>
      .
      <span class="flex-auto"></span>
      <button mat-icon-button><mat-icon>show_chart</mat-icon></button>
      <button mat-icon-button><mat-icon>line_weight</mat-icon></button>
    </mat-toolbar>
  `
})
export class ToolbarComponent {
  @Input() sidenav!: MatSidenav;
  @Input() small!: boolean | null;
}
