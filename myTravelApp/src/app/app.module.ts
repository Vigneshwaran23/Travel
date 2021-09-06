import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { DataServiceService } from './data-service.service';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
