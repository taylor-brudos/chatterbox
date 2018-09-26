import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';
import { CreateComponent } from './create/create.component';
import { ChatterboxComponent } from './chatterbox/chatterbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashComponent,
    CreateComponent,
    ChatterboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
