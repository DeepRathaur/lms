import { Injectable } from '@angular/core';
import { Routes, Route } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';

@Injectable({
  providedIn: 'root'
})
export class DefaultLayoutService {

  constructor() { }
  /**
   * Creates routes using the Default layout component and authentication.
   * @param routes The routes to add.
   * @return The new route using Default layout as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: DefaultLayoutComponent,
      children: routes,
      //canActivate: [],
      // Reuse DefaultLayoutComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
