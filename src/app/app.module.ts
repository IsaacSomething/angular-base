import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarModule } from './components/toolbar';
import { MenuModule } from './components/menu';
import { HttpClientModule } from '@angular/common/http';
const moduleImports = [BrowserModule, BrowserAnimationsModule, AppRoutingModule, LayoutModule, ToolbarModule, MenuModule, HttpClientModule];

import { MatSidenavModule } from '@angular/material/sidenav';
const materialImports = [MatSidenavModule];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [...materialImports, ...moduleImports],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
