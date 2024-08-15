import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'base-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="text-sm">Angular<span class="font-bold">Base</span></span>`
})
export class BaseLogoModule {}
