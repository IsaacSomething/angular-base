import { Component } from '@angular/core';
import { routeProps } from 'src/app/app-routing.module';

@Component({
  selector: 'base-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  routes = routeProps;
  constructor() {}
}
