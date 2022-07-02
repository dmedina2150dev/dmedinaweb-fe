import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomThemeModule } from './components/custom-theme/custom-theme.module';
import { NavigationModule } from './components/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NavigationModule,
    CustomThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
