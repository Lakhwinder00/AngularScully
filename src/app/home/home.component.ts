import { Component, OnInit } from '@angular/core';
import { HomeCommon } from '../common/home.common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public homeCommon: HomeCommon) { }
  headerName: any;
  subHeader: any;
  IconImages: any = [];
  executiveProductDelivery: any = [];
  engineeringHeader: any;
  engineeringSkills: any = [];
  contactTexhXL: any;
  skillsName: any = [];
  videoLink: any;
  ngOnInit(): void {
    this.headerName = this.homeCommon.HeaderName;
    this.subHeader = this.homeCommon.SubHeader;
    this.IconImages = this.homeCommon.IconImages;
    this.executiveProductDelivery = this.homeCommon.ExecutiveProductDelivery;
    this.engineeringHeader = this.homeCommon.EngineeringHeader
    this.engineeringSkills = this.homeCommon.EngineeringSkills,
    this.contactTexhXL = this.homeCommon.ContactTexhXL;
    this.skillsName = this.homeCommon.SkillsName
    this.videoLink=this.homeCommon.VideoLink
  }

}
