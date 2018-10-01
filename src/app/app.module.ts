import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ScheduleEditViewComponent } from './schedule-edit-view/schedule-edit-view.component';
import { ScheduleEndDisplayComponent } from './schedule-end-display/schedule-end-display.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service';
import { AppService } from './app.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ScheduleEditViewComponent,
    ScheduleEndDisplayComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpModule , UserService , AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
