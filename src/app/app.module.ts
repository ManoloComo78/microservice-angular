import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { DynamiccomboboxComponent } from './dynamiccombobox/dynamiccombobox.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {NgMaterialModule} from "./ng-material/ng-material.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DynamiccomboboxComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
