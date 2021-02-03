import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './modules/account/account.module';
import { InfringementModule } from './modules/infringement/infringement.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    InfringementModule,
    FontAwesomeModule,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
