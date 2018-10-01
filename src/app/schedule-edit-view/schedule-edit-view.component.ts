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
    {mess_day:"mon" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {mess_day:"tue" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {mess_day:"wed" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {mess_day:"thu" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {mess_day:"fri" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {mess_day:"sat" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {mess_day:"sun" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
  ];
  ngOnInit() {
  }

  createSchedule(){
    this.appService.createSchecule(this.table).then((res)=>{
      console.log(res);
    })
  }

}
