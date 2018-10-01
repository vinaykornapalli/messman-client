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
    {day:"mon" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {day:"tue" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {day:"wed" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {day:"thu" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {day:"fri" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {day:"sat" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
    {day:"sun" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
  ];
  ngOnInit() {
  }

  createSchedule(){
    this.appService.createSchecule(this.table).then((res)=>{
      console.log(res);
    })
  }

}
