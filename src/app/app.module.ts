import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { TemplateComponent } from './thema/template/template.component';
import { NavbarComponent } from './thema/template/components/navbar/navbar.component';
import { NavComponent } from './thema/template/components/nav/nav.component';
import { ContenComponent } from './thema/template/components/conten/conten.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TemplateComponent,
    NavbarComponent,
    NavComponent,
    ContenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
