import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutHeaderComponent} from './layout-header/layout-header.component';
import {LayoutFooterComponent} from './layout-footer/layout-footer.component';
import {LayoutLeftSideComponent} from './layout-left-side/layout-left-side.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMaterialModule} from "./ng-material/ng-material.module";
import {DynamicSelectComponent} from './dynamic-select/dynamic-select.component';
import {DynamicSelectContainerComponent} from './dynamic-select-container/dynamic-select-container.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutLeftSideComponent,
    DynamicSelectComponent,
    DynamicSelectContainerComponent
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
