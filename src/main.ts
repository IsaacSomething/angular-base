import { enableProdMode, importProvidersFrom } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

const materialImports = [MatSidenavModule];
const moduleImports = [BrowserModule, BrowserAnimationsModule, AppRoutingModule, LayoutModule];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(...materialImports, ...moduleImports)]
}).catch(err => console.error(err));
