import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'base-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <p>Base project to test features and/or experiment with things</p> `
})
export class HomeComponent {}
