import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <p>not-found works!</p> `
})
export class NotFoundComponent {}
