import { ViewsModule } from './views/views.module';
import { ModsModule } from './mods/mods.module';
import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from './elements/elements.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    ModsModule,
    ViewsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
