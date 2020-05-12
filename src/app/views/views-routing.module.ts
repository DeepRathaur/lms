import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutService } from '../containers';
import { DashbordComponent } from './dashbord';


const routes: Routes = [
  DefaultLayoutService.childRoutes([
    {
      path: 'dashboard',
      component: DashbordComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
