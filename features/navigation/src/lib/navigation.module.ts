import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseMaterialModule } from '@mylib/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [BaseMaterialModule, MatSelectModule, CommonModule, FormsModule, CommonModule, FormsModule, FlexLayoutModule, RouterModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class NavigationModule { }
