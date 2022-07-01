import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { ViewCertificateComponent } from './components/view-certificate/view-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    ViewCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
