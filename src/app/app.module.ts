import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForDirective } from './directive/ng-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    NgForDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
