import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Subject, map } from 'rxjs';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

@Component({
  selector: 'base-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatSidenavModule, MenuComponent, ToolbarComponent, RouterOutlet, AsyncPipe],
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="side" [opened]="!(small$ | async)">
        <base-menu></base-menu>
      </mat-sidenav>

      <mat-sidenav-content [class.small]="small$ | async">
        <base-toolbar [sidenav]="sidenav" [small]="small$ | async"></base-toolbar>

        <div class="m-6">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class AppComponent {
  private breakpointObserver = inject(BreakpointObserver);
  small$ = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(map(({ matches }) => matches));
  destroyed$ = new Subject<void>();
}
