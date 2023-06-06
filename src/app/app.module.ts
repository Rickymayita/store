import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingmodule} from './app-routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
