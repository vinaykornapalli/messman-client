import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service'
@Component({
  selector: 'app-schedule-edit-view',
  templateUrl: './schedule-edit-view.component.html',
  styleUrls: ['./schedule-edit-view.component.css']
})
export class ScheduleEditViewComponent implements OnInit {

  constructor(public appService : AppService) { }
  table : Array<any> = [
    {mess_day:"mon" , breakfast:"" , lunch:"" , snacks:"" , dinner: ""},
    {mess_day:"tue" , breakfast:"" , lunch:"" , snacks:"" , dinner: ""},
    {mess_day:"wed" , breakfast:"" , lunch:"" , snacks:"" , dinner: ""},
    {mess_day:"thu" , breakfast:"" , lunch:"" , snacks:"" , dinner: ""},
    {mess_day:"fri" , breakfast:"" , lunch:"" , snacks:"" , dinner: ""},
    {mess_day:"sat" , breakfast:"" , lunch:"" , snacks:"" , dinner: ""},
    {mess_day:"sun" , breakfast:"" , lunch:"" , snacks:"" , dinner: ""},
  ];
  ngOnInit() {
  }

  createSchedule(){
    this.appService.createSchecule(this.table).then((res)=>{
      console.log(res);
    })
  }

}
