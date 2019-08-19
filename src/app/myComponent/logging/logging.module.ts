import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import {LoggingRoutingModule} from './loghingRouting.module';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [LogInComponent, RegisterComponent, ForgetPassComponent, ResetPassComponent],
  imports: [
    CommonModule,
    LoggingRoutingModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule
  ]
})
export class LoggingModule { }
