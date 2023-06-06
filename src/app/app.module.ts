import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavaScriptComponent } from './JavaScript/JavaScript.component';
import { HomeComponent } from './home/home.component';
import { SafeHtmlPipe } from './pipe/sentize.pipe';

@NgModule({
  declarations: [
    AppComponent,
      JavaScriptComponent,
      HomeComponent,SafeHtmlPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
