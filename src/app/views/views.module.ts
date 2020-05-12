import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { DashbordComponent } from './dashbord';


@NgModule({
    declarations: [
        DashbordComponent
    ],
    imports: [
        CommonModule,
        ViewsRoutingModule
    ],
    providers: []
})
export class ViewsModule { }
