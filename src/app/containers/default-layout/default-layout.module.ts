import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [HeaderComponent, FooterComponent, SidenavComponent, DefaultLayoutComponent]
  })
  export class DefaultLayoutModule {}