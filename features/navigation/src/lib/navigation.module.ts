import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { BaseMaterialModule } from '@mylib/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [BaseMaterialModule, MatSelectModule, CommonModule, FormsModule, CommonModule, FormsModule, FlexLayoutModule, RouterModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class NavigationModule { }
