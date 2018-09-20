import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { ScheduleEditViewComponent } from './../schedule-edit-view/schedule-edit-view.component';
import {ScheduleEndDisplayComponent } from './../schedule-end-display/schedule-end-display.component';
import { LoginComponent } from './../login/login.component';

const routes : Routes = [
  {path:'menu', component:ScheduleEndDisplayComponent},
  {path:'menu/edit' , component:ScheduleEditViewComponent},
  {path:'login' , component:LoginComponent},
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports:[
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
