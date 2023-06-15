import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'base-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <p>Home works!</p> `
})
export class HomeComponent {}
