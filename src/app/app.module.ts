import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { LayoutComponent } from './shared/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PeopleComponent } from './people/people.component';
import { PeopleCommon } from './common/people.common';
import { HomeComponent } from './home/home.component';
import { HomeCommon } from './common/home.common';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { CapabilitiesCommon } from './common/capabilities.common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Reactive Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PeopleComponent,
    HomeComponent,
    CapabilitiesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [PeopleCommon, HomeCommon, CapabilitiesCommon],
  bootstrap: [AppComponent]
})
export class AppModule { }
