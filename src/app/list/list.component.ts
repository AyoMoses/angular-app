import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // WE REFERENCE THE SERVICE (HTTP) THRU WHAT IS CALLED - DEPENDENCY INJECTION
  constructor(private _myHttp: HttpService) { } 
  //NOW WE CAN USE THE SERVICE DECLARED THRUOUT OUR COMPONENT LOGIC

  // WE CREATE AND OBJECT TO HLD OUR DATA FROM THE API
  brews: Object;

  ngOnInit() { //any code in here runs once the component is loaded
    this._myHttp.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
