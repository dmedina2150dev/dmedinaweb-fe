import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomThemeComponent } from './custom-theme.component';



@NgModule({
  declarations: [
    CustomThemeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomThemeComponent
  ]
})
export class CustomThemeModule { }
