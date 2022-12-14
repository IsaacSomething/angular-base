import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarModule } from '@base/components/toolbar';
import { MenuModule } from '@base/components/menu';
const moduleImports = [BrowserModule, BrowserAnimationsModule, AppRoutingModule, LayoutModule, ToolbarModule, MenuModule];

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
