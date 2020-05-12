import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [HeaderComponent, FooterComponent, SidenavComponent]
  })
  export class DefaultLayoutModule {}