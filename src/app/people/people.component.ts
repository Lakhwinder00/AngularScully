import { Component, OnInit } from '@angular/core';
import { PeopleCommon } from '../common/people.common';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']  
})
export class PeopleComponent implements OnInit {
  peopleImagesList: any = [];
  headerName: any;
  subHeader: any;
  expertise: any;
  role: any;
  constructor(private peopleCommon: PeopleCommon) { }
  ngOnInit(): void {
    this.peopleImagesList = this.peopleCommon.ImagePath;
    this.headerName = this.peopleCommon.HeaderName;
    this.subHeader = this.peopleCommon.SubHeader;
    this.expertise = this.peopleCommon.Expertise;
    this.role=this.peopleCommon.Role
  }

}
