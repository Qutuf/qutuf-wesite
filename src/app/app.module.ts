import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { QutufService } from './shared/utils/qutuf-service.service'
import { ApiService } from './shared/utils/api-service.service';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    QutufService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
