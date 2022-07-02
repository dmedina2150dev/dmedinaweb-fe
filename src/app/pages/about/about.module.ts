import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
