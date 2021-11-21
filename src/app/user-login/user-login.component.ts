import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }
  paramObj:any;
  ngOnInit(): void {

    this.activateRoute.queryParams.subscribe(
      (params)=>
      {
        this.paramObj=params;
        let strData=`User ID : ${this.paramObj.uid} Password : ${this.paramObj.pwd}`;
        alert(strData)
      }
    )
  }

}
