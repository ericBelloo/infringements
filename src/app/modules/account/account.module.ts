import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { AccountRoutingModule } from './account-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
// components
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from 'src/app/globals/components/message/message.component';

@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    MessageComponent, 
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ]
})
export class AccountModule { }
