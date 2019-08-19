import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggingModule} from './myComponent/logging/logging.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './App.Routing.Module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './myService/users.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggingModule,
    RoutingModule,
    HttpClientModule 
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
