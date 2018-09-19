import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-end-display',
  templateUrl: './schedule-end-display.component.html',
  styleUrls: ['./schedule-end-display.component.css']
})
export class ScheduleEndDisplayComponent implements OnInit {

  constructor() { }
   table : Array<any> = [
     {day:"monday" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
     {day:"tuesday" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
     {day:"wednesday" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
     {day:"thrusday" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
     {day:"friday" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
     {day:"saturday" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
     {day:"sunday" , breakfast:"poha" , lunch:"rice" , snacks:"biscuits" , dinner: "roti"},
   ];
  ngOnInit() {
  }

}
